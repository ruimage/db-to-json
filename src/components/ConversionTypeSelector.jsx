import React from 'react';
import PropTypes from 'prop-types';

function ConversionTypeSelector({ types }) {
  return (
    <select name="conversion">
      {types.map((curConversionType, conversionTypeIndex) => (
        <option
          key={curConversionType}
          value={conversionTypeIndex + 1}
        >
          {curConversionType}
        </option>
      ))}
    </select>
  );
}

ConversionTypeSelector.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  types: PropTypes.array,
};

export default ConversionTypeSelector;
