import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

export default class DocumentTitle extends Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node
    };

    componentDidMount() {
        this._updateTitle(this.props.title);
    }

    componentDidUpdate() {
        this._updateTitle(this.props.title);
    }

    _updateTitle = title => {
        if (title) {
            document.title = trimString(title);
        }
    };

    render() {
        if (this.props.children) {
            return this.props.children;
        } else {
            return null;
        }
    }
}
