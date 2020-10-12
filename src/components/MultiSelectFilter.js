import React from 'react';
import styled from 'react-emotion';
import Select from 'react-select';

// Setting height to the max allowed for any individual filter
// to provide as much room as possible to the options list
const FilterContainer = styled('div')`
  height: 220px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const MultiSelectFilter = ({ handleChange, options, name }) => {
  const elementId = `${name}-select`;
  const selectStyles = {
    // Setting maxHeight to 53 to ensure the input field only expands
    // to two lines. If it grows beyond two lines, it will push the
    // menu list outside of the div and requiring scrolling the containing
    // div as well as the menu list itself to see all the options, which
    // could be confusing for the user
    valueContainer: (provided) => ({
      ...provided,
      maxHeight: 50,
      overflow: 'auto',
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: 0,
      maxHeight: 53
    }),
    // Setting maxHeight to 150px to ensure that its height along with
    // the input container's height at two lines of selected options
    // doesn't exceed the height of the containing div
    menuList: (provided) => ({
      ...provided,
      maxHeight: '150px',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
    })
  };
  const _handleChange = (e, v) => {
    const newValue = Array.isArray(e) ? e.map(o => o.value) : [];
    handleChange(newValue);
    const valueContainer = document.querySelector(`.${name}__value-container`);
    // Without setting scrollTop, the most recently selected option can be hidden
    // until the user manually scrolls to the bottom of the value containers
    valueContainer.scrollTop = valueContainer.scrollHeight - valueContainer.clientHeight;
  }
  return (
    <FilterContainer>
      <Select
        classNamePrefix={name}
        id={elementId}
        isMulti
        name={name}
        options={options}
        onChange={_handleChange}
        styles={selectStyles}
      />
    </FilterContainer>
  )
};

export const MultiSelectFilterLabel = ({ currentValue }) => {
  let label = 'Any';
  if (currentValue && currentValue.length === 1) {
    label = `${currentValue[0]} only`;
  }
  if (currentValue && currentValue.length > 1) {
    label = `${currentValue.length} selected`;
  }
  return (<>{label}</>);
};
