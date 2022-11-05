import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function ConversionTypeSelector({ types }) {
  return (
    <StyledSelect name="conversion">
      {types.map((curConversionType, conversionTypeIndex) => (
        <option
          key={curConversionType}
          value={conversionTypeIndex + 1}
        >
          {curConversionType}
        </option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  width: 15rem;
`;

ConversionTypeSelector.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  types: PropTypes.array,
};

export default ConversionTypeSelector;
