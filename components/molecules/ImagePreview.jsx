import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import LoadingDots from '../atoms/LoadingDots';

const LOADING_DIMENSIONS = {
    width: 50,
    height: 10
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
}) {
    const triggerRef = useRef();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [styles, setStyles] = useState({});
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(
        () => {
            const img = new Image();
            img.onload = () => {
                setIsLoaded(true);
                setHasFailed(false);
                setWidth(img.width);
                setHeight(img.height);
            };
            img.onerror = () => {
                setIsLoaded(true);
                setHasFailed(true);
                setWidth(150);
                setHeight(20);
            };
            img.src = src;
        },
        [src]
    );

    const newWidth = isLoaded ? maxHeight / height * width : 0;

    const onEnterLeave = useCallback(isHovering => setIsHovering(isHovering), []);

    const getTooltipPosition = useCallback(
        () => {
            const el = triggerRef.current;
            const {
                top,
                left,
                width,
                right,
                height
            } = el.getBoundingClientRect();
            const tooltipWidth = hasFailed ? width : isLoaded ? newWidth : LOADING_DIMENSIONS.width;
            const tooltipHeight = hasFailed
                ? height
                : isLoaded ? maxHeight : LOADING_DIMENSIONS.height;
            let tooltipX, tooltipY;
            const arrowOffset = showArrow ? arrowSize * 2 : 0;
            let hoverTop = top + window.scrollY;

            switch (position) {
                case 'bottom':
                    tooltipX =
                        left -
                        padding +
                        width / 2 -
                        tooltipWidth / 2;
                    tooltipY = hoverTop + height + arrowOffset;
                    break;
                case 'left':
                    tooltipX = left - tooltipWidth - padding * 2 - arrowOffset;
                    tooltipY =
                        hoverTop + height / 2 - tooltipHeight / 2 - padding;
                    break;
                case 'right':
                    tooltipX = right + arrowOffset;
                    tooltipY =
                        hoverTop + height / 2 - tooltipHeight / 2 - padding;
                    break;
                case 'top':
                default:
                    tooltipX =
                        left -
                        padding +
                        width / 2 -
                        tooltipWidth / 2;
                    tooltipY = hoverTop - tooltipHeight - padding * 2 - arrowOffset;
                    break;
            }
            if (
                typeof tooltipX === 'number' &&
                typeof tooltipY === 'number' &&
                !isNaN(tooltipY) &&
                !isNaN(tooltipX)
            ) {
                return {
                    left: tooltipX,
                    top: tooltipY,
                    width: isLoaded ? 'auto' : `50px`,
                    height: isLoaded ? 'auto' : `20px`
                };
            }
            return {};
        },
        [
            maxHeight,
            newWidth,
            padding,
            isLoaded,
            hasFailed,
            width,
            height,
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
            transitionProperty: 'transform, opacity',
            transformOrigin: `${getOppositeSide(position)} center`,
            transform: 'scale(0)',
            opacity: 0,
            ...customTooltipStyles,
        }
        return (
            <div
                data-testid="image-preview-tooltip"
                style={tooltipStyles}>
                {isLoaded && !hasFailed ? (
                    <img
                        data-testid="image-preview-tooltip-image"
                        src={src}
                        alt={alt}
                        style={{ width: `${newWidth}px`, height: `${maxHeight}px`, display: 'block' }}
                    />
                ) : hasFailed ? null : (
                    <LoadingDots
                        style={{
                            marginTop: 3
                        }}
                        size="sm"
                        whiteDots
                    />
                )}
                {hasFailed && (
                    <span
                        data-testid="image-preview-load-failure"
                        className="-text-center gds-text--body-xs"
                        style={{ width: `${width}px`, height: `${height}px`, display: 'block' }}>
                        Failed to load GIF.
                    </span>
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
            }}>
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
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    maxHeight: PropTypes.number,
    padding: PropTypes.number,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    style: PropTypes.object,
    tooltipStyles: PropTypes.object,
    showArrow: PropTypes.bool,
    arrowSize: PropTypes.number
};

export default ImagePreview;
