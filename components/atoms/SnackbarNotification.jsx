import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class SnackbarNotification extends Component {
    displayName = 'SnackbarNotification';

    static propTypes = {
        /** Unique key (string or number) for identification */
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        /** Content of the notification, can be passed as children. If no text or children is passed, the component won't render. */
        text: PropTypes.string,
        /** One of: `success`, `info`, `warning`, `danger`, `hidden` */
        context: PropTypes.string,
        /** Time in ms to hide notification, if value is 0 the notification will remain open */
        msToClose: PropTypes.number,
        /** Hides the close button, if true auto enables timeout to hide notification */
        hideCloseButton: PropTypes.bool,
        /** Function to be called after hiding notification */
        callback: PropTypes.func,
        /** Component children that can be used as content */
        children: PropTypes.node,
        style: PropTypes.object,
        className: PropTypes.string
    };

    static defaultProps = {
        msToClose: 3000,
        hideCloseButton: false
    };

    state = {
        shouldHide: false // flag to know if component should be visible
    };

    componentDidMount() {
        // Set the timeout to hide component if applies
        this._setTimeout();
    }

    componentWillUnmount() {
        // Clears timeout if exists
        this._clearTimeout();
    }

    _timeout = null;

    _setTimeout = () => {
        const { msToClose, hideCloseButton } = this.props;
        // If close button is not showing always set timeout
        // If msToClose is 0 skip timeout
        const timeout =
            hideCloseButton || msToClose !== 0 ? setTimeout(this._closeSnackbar, msToClose) : null;
        // Sets timeout in property if it wasn't setted before
        if (!this._timeout) this._timeout = timeout;
    };

    _clearTimeout = () => {
        if (this._timeout) clearTimeout(this._timeout);
    };

    // Sets the hide in state and calls callback function
    _closeSnackbar = () => {
        // Clear timeout if still running
        this._clearTimeout();
        // If there's a callback function pass the id
        const { callback, id } = this.props;
        const cb = callback ? () => callback(id) : null;
        this.setState(
            {
                shouldHide: true
            },
            cb
        );
    };

    render() {
        const { text, context, hideCloseButton, className, style, children } = this.props;
        // Gets the content of the snackbar, either children or message passed through props
        // If there's no content, don't render the component
        const content = children || text;
        if (!content) {
            return null;
        }

        // Sets the class of the component depending on the prop.context value
        const baseClass = 'gds-snackbar__notification';
        const rootClass = cx(baseClass, className, {
            [`${baseClass}--hidden`]: this.state.shouldHide,
            [`${baseClass}--${context}`]: context
        });

        const buttonClass = cx(`${baseClass}-button`, {
            [`${baseClass}-button--${context}`]: context
        });

        return (
            <li className={rootClass} style={style}>
                <p className="gds-snackbar__notification-text">{content}</p>
                {hideCloseButton || (
                    <button className={buttonClass} onClick={this._closeSnackbar} />
                )}
            </li>
        );
    }
}

export default SnackbarNotification;
