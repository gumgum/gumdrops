import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../molecules/FormGroup';
import FormGroupLabel from './FormGroupLabel';
import FormGroupTextHelp from './FormGroupTextHelp';

const DEFAULT_STYLES = {
    position: 'absolute',
    marginTop: '-2px',
    top: '100%',
    width: '100%',
    padding: '0.01rem 0.25rem'
};

const FormInputWrapper = ({ children, groupClassName, label, errors, errorStyles, context }) => {
    const isInvalid = errors.length > 0;

    return (
        <FormGroup className={groupClassName} context={isInvalid ? context : 'default'}>
            {label && <FormGroupLabel text={label} />}
            <div style={{ position: 'relative' }}>
                {children}
                {isInvalid && (
                    <FormGroupTextHelp
                        className="-ellipsis"
                        text={errors.join(', ')}
                        style={{ ...DEFAULT_STYLES, ...errorStyles }}
                    />
                )}
            </div>
        </FormGroup>
    );
};

FormInputWrapper.displayName = 'FormInputWrapper';

FormInputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    groupClassName: PropTypes.string,
    errors: PropTypes.array,
    label: PropTypes.string,
    context: PropTypes.oneOf(['danger', 'success', 'warning']),
    errorStyles: PropTypes.object
};

FormInputWrapper.defaultProps = {
    groupClassName: '',
    label: '',
    errors: [],
    context: 'danger',
    errorStyles: {}
};

export default FormInputWrapper;
