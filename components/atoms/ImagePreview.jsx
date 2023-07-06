import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LOADING_DIMENSIONS = {
    width: 50,
    height: 20
};

const FAILED_DIMENSIONS = {
    width: 150,
    height: 25
};
function ImagePreview({
    children,
    src,
    alt,
    maxHeight,
    padding,
    position = 'top',
    showArrow = true,
    arrowSize = 5,
    style: customStyles = {},
    tooltipStyles: customTooltipStyles = {},
    className,
    ...otherProps
}) {
    const triggerRef = useRef();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [styles, setStyles] = useState({});
    const [hasFailed, setHasFailed] = useState(false);

    const baseClass = 'gds-image-preview';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--loaded`]: isLoaded,
        [`${baseClass}--failed`]: hasFailed,
        [`${baseClass}--show-arrow`]: showArrow,
    });

    useEffect(
        () => {
            const img = new Image();
            setIsLoaded(false);
            setHasFailed(false);
            img.onload = () => {
                setIsLoaded(true);
                setHasFailed(false);
                setWidth(img.width);
                setHeight(img.height);
            };
            img.onerror = () => {
                setIsLoaded(true);
                setHasFailed(true);
                setWidth(FAILED_DIMENSIONS.width);
                setHeight(FAILED_DIMENSIONS.height);
            };
            img.src = src;
        },
        [src]
    );
    // calculate the width based on the height to match the original aspect ratio
    const newWidth = isLoaded ? maxHeight / height * width : 0;
    // simple listener to set a flag when we're hovering
    const onEnterLeave = useCallback(isHovering => setIsHovering(isHovering), []);

    const getTooltipPosition = useCallback(
        () => {
            let tooltipX, tooltipY;
            const el = triggerRef.current;
            const tooltipWidth = hasFailed ? width : isLoaded ? newWidth : LOADING_DIMENSIONS.width;
            const tooltipHeight = hasFailed ? height : isLoaded ? maxHeight : LOADING_DIMENSIONS.height;
            const {
                top,
                left,
                width: _width,
                right,
                height: _height
            } = el.getBoundingClientRect();
            const arrowOffset = showArrow ? arrowSize * 2 : 0;
            const hoverTop = top + window.scrollY;
            const offset = !isLoaded || hasFailed ? 0 : padding;

            switch (position) {
                case 'bottom':
                    tooltipX =
                        left -
                        offset +
                        _width / 2 -
                        tooltipWidth / 2;
                    tooltipY = hoverTop + _height + arrowOffset;
                    break;
                case 'left':
                    tooltipX = left - tooltipWidth - (offset * 2) - arrowOffset;
                    tooltipY =
                        hoverTop + _height / 2 - tooltipHeight / 2 - offset;
                    break;
                case 'right':
                    tooltipX = right + arrowOffset;
                    tooltipY =
                        hoverTop + _height / 2 - tooltipHeight / 2 - offset;
                    break;
                case 'top':
                default:
                    tooltipX =
                        left -
                        offset +
                        _width / 2 -
                        tooltipWidth / 2;
                    tooltipY = hoverTop - tooltipHeight - offset * 2 - arrowOffset;
                    break;
            }
            if (
                isFinite(tooltipY) &&
                isFinite(tooltipX)
            ) {
                return {
                    left: tooltipX,
                    top: tooltipY,
                    width: isLoaded && !hasFailed ? 'auto' : `${tooltipWidth}px`,
                    height: isLoaded && !hasFailed ? 'auto' : `${tooltipHeight}px`,
                };
            }
            return {};
        },
        [
            maxHeight,
            newWidth,
            width,
            height,
            padding,
            isLoaded,
            hasFailed,
            position,
            arrowSize,
            showArrow
        ]
    );

    useEffect(
        () => {
            if (triggerRef && triggerRef.current) {
                setStyles(getTooltipPosition());
            }
        },
        [triggerRef, getTooltipPosition, isHovering]
    );

    const getOppositeSide = useCallback(
        () => {
            switch (position) {
                case 'bottom':
                    return 'top';
                case 'left':
                    return 'right';
                case 'right':
                    return 'left';
                case 'top':
                default:
                    return 'bottom';
            }
        },
        [position]
    );

    const getArrowStyles = useCallback(
        (position, tooltipStyles) => {
            switch (position) {
                case 'bottom':
                    return {
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: `${arrowSize}px solid transparent`,
                        borderRight: `${arrowSize}px solid transparent`,
                        borderBottom: `${arrowSize}px solid ${tooltipStyles.backgroundColor}`
                    };
                case 'right':
                    return {
                        top: '50%',
                        right: '100%',
                        transform: 'translateY(-50%)',
                        borderTop: `${arrowSize}px solid transparent`,
                        borderBottom: `${arrowSize}px solid transparent`,
                        borderRight: `${arrowSize}px solid ${tooltipStyles.backgroundColor}`
                    };
                case 'left':
                    return {
                        top: '50%',
                        left: '100%',
                        transform: 'translateY(-50%)',
                        borderTop: `${arrowSize}px solid transparent`,
                        borderBottom: `${arrowSize}px solid transparent`,
                        borderLeft: `${arrowSize}px solid ${tooltipStyles.backgroundColor}`
                    };
                case 'top':
                default:
                    return {
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: `${arrowSize}px solid transparent`,
                        borderRight: `${arrowSize}px solid transparent`,
                        borderTop: `${arrowSize}px solid ${tooltipStyles.backgroundColor}`
                    };
            }
        },
        [position, arrowSize]
    );

    const tooltipElement = () => {
        const tooltipStyles = {
            position: 'absolute',
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: `${padding}px`,
            borderRadius: 3,
            transition: '0.4s ease',
            transitionProperty: 'transform, opacity, padding',
            transformOrigin: `${getOppositeSide(position)} center`,
            transform: 'scale(0)',
            opacity: 0,
            ...customTooltipStyles,
        }
        return (
            <div
                data-testid="image-preview-tooltip"
                className="gds-flex gds-flex--content-center gds-flex--justify-center"
                style={tooltipStyles}>
                {isLoaded && !hasFailed ? (
                    <img
                        data-testid="image-preview-tooltip-image"
                        src={src}
                        alt={alt}
                        style={{ width: `${newWidth}px`, height: `${maxHeight}px`, display: 'block' }}
                    />
                ) : hasFailed ? null : (
                    <div className="gds-loading__dot gds-loading__dot--sm gds-loading__dot--white" style={{
                        position: 'relative',
                        top: 'auto',
                        left: 'auto',
                    }} />
                )}
                {hasFailed && (
                    <p
                        data-testid="image-preview-load-failure"
                        className="-text-center gds-text--body-xs">
                        Failed to load image.
                    </p>
                )}
                {showArrow && (
                    <span
                        data-testid="image-preview-arrow"
                        style={{
                            position: 'absolute',
                            width: 0,
                            height: 0,
                            ...getArrowStyles(position, tooltipStyles)
                        }}
                    />
                )}
            </div>
        );
    };
    return (
        <span
            data-testid="image-preview-hover-element"
            onMouseEnter={() => onEnterLeave(true)}
            onMouseLeave={() => onEnterLeave(false)}
            ref={triggerRef}
            style={{
                position: 'relative',
                cursor: 'pointer',
                display: 'inline-block',
                ...customStyles
            }}
            className={rootClass}
            {...otherProps}>
            {children}
            {ReactDOM.createPortal(
                React.cloneElement(tooltipElement(), {
                    style: {
                        ...tooltipElement().props.style,
                        ...styles,
                        transform: isHovering ? 'scale(1)' : 'scale(0)',
                        opacity: isHovering ? 1 : 0
                    }
                }),
                document.body
            )}
        </span>
    );
}
ImagePreview.displayName = 'ImagePreview';
ImagePreview.defaultProps = {
    maxHeight: 200,
    padding: 5,
    position: 'top',
    showArrow: true,
    arrowSize: 5
};
ImagePreview.propTypes = {
    children: PropTypes.node.isRequired,
    /** the url to the image */
    src: PropTypes.string.isRequired,
    /** the alt text for the image */
    alt: PropTypes.string,
    /** the maximum height of the image, width is calculated automatically */
    maxHeight: PropTypes.number,
    /** the padding around the image in the tooltip */
    padding: PropTypes.number,
    /** the position of the tooltip relative to the element */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** whether or not to show the arrow */
    showArrow: PropTypes.bool,
    /** the size of the arrow in pixels */
    arrowSize: PropTypes.number,
    /** custom styles for the wrapper */
    style: PropTypes.object,
    /** any additional classnames */
    className: PropTypes.string,
    /** custom styles for the tooltip */
    tooltipStyles: PropTypes.object,
};

export default ImagePreview;
