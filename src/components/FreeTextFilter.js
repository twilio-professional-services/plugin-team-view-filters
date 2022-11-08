import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';

const FilterContainer = styled('div')`
  margin-left: 16px;
`;

export const FreeTextFilter = ({ handleChange, currentValue = '', fieldName }) => {
  const _handleChange = (e) => {
    e.preventDefault();
    handleChange(e.target.value);
  };
  return (
    <FilterContainer>
      <TextField
        id="extension-search"
        type="text"
        onChange={_handleChange}
        name={fieldName}
        value={currentValue}
      />
    </FilterContainer>
  );
};

export const FreeTextFilterLabel = ({ currentValue }) => (
  <>{currentValue && currentValue.length ? `Containing "${currentValue}"` : 'Any'}</>
);
