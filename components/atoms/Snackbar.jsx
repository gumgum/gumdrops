import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = ({ text, type, closeFunction }) => {
    const baseClass = 'gds-snackbar__notification';
    const buttonBaseClass = `${baseClass}-button`;
    const typeClass = type ? `${baseClass}--${type}` : '';
    const buttonTypeClass = type ? `${buttonBaseClass}--${type}` : '';

    return (
        <div className="gds-snackbar -z-1">
            <div className={`${baseClass} ${typeClass}`}>
                <p className={`${baseClass}-text`}>{text}</p>
                {closeFunction && (
                    <button
                        className={`${buttonBaseClass} ${buttonTypeClass}`}
                        onClick={closeFunction}
                    />
                )}
            </div>
        </div>
    );
};

Snackbar.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    closeFunction: PropTypes.func
};

export default Snackbar;
