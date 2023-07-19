import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MultiSelectSubMenu from './MultiSelectSubMenu';
import MultiSelectMenuItem from './MultiSelectMenuItem';

import generateUID from '../utils/generateUID';
import updateOptions from '../utils/updateMultiSelectOptions';
import cx from 'classnames';


const getSelectedOptions = (options) => {
  const selected = options.reduce((acc, cur) => {
    if (cur.options) {
      return [...acc, ...getSelectedOptions(cur.options)];
    }
    return cur.selected ? [...acc, cur] : acc;
  }, []);

  return selected;
};

const MultiSelect = ({
  options,
  onChange,
  size,
  className,
  ulStyle,
  ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const uid = generateUID(containerRef);

  const regionId = `MultiSelect_region_${uid}`;
  const labelId = `MultiSelect_label_${uid}`;

  useEffect(() => {
    const closeOnClickOutside = ({ target }) => {
      const el = containerRef.current;
      if (!el.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', closeOnClickOutside);

    return () => {
      window.removeEventListener('click', closeOnClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  const getPlaceholder = () => {
    const { placeholder } = otherProps;
    const selectedOptions = getSelectedOptions(options);
    return selectedOptions.map((x) => x.name).join(', ') || placeholder;
  };

  const handleSubChange = (index) => (subItem) => {
    const updatedOptions = options.map((item, i) => {
      const shouldUpdate = i === index;
      if (shouldUpdate) {
        const subOptions = updateOptions(item.options, subItem);
        if (subOptions) {
          const allSelected = !subOptions.map((opt) => opt.selected).includes(false);
          return {
            ...item,
            selected: allSelected,
            options: subOptions
          };
        }
      }
      return item;
    });

    onChange(updatedOptions);
  };

  const handleChange = (item) => {
    const updatedOptions = updateOptions(options, item);
    onChange(updatedOptions);
  };

  const { options: _, ...restProps } = otherProps;

  const isSmall = size === 'sm';
  const isExtraSmall = size === 'xs';

  const rootClass = cx('gds-multi-select', className, {
    'gds-multi-select--sm': isSmall,
    'gds-multi-select--xs': isExtraSmall,
    'gds-button-dropdown--active': isOpen
  });

  const btnClass = cx('gds-multi-select__button', {
    'gds-multi-select__button--sm': isSmall,
    'gds-multi-select__button--xs': isExtraSmall
  });

  return (
      <div className={rootClass} {...restProps} ref={containerRef}>
          <button
              aria-expanded={isOpen}
              aria-pressed={isOpen}
              aria-controls={regionId}
              tabIndex={0}
              className={btnClass}
              id={labelId}
              name="multiselectMenu"
              type="button"
              onClick={toggleDropdown}>
              <div className="-ellipsis">{getPlaceholder()}</div>
          </button>
          <ul
              aria-labelledby={labelId}
              aria-hidden={!isOpen}
              className="gds-multi-select__menu"
              id={regionId}
              role="region"
              style={isOpen ? ulStyle : {}}>
              {options.map(({ name, value, selected, options: subOptions }, index) =>
                  subOptions ? (
                      <MultiSelectSubMenu
                          key={`menu-item-${index}`}
                          name={name}
                          index={index}
                          value={value}
                          selected={selected}
                          options={subOptions}
                          onChange={handleChange}
                          onSubChange={handleSubChange(index)}
                          size={size}
                      />
                  ) : (
                      <MultiSelectMenuItem
                          key={`menu-item-${index}`}
                          name={name}
                          index={index}
                          value={value}
                          selected={selected}
                          onChange={handleChange}
                          size={size}
                      />
                  )
              )}
          </ul>
      </div>
  );
};

MultiSelect.displayName = 'MultiSelect';

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any,
      selected: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.any,
          selected: PropTypes.bool
        })
      )
    })
  ).isRequired,
  callback: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', '']),
  className: PropTypes.string,
  ulStyle: PropTypes.object,
};

MultiSelect.defaultProps = {
  placeholder: '',
  className: '',
  onChange: () => {}, // Placeholder for the default onChange prop
  ulStyle: {}
};

export default MultiSelect;
