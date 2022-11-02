import React from 'react';
import PropTypes from 'prop-types';

ConversionTypeSelector.propTypes = {
  types: PropTypes.array
};

function ConversionTypeSelector({types}) {
  return (
    <select name="conversion">
      {types.map((curConversionType, conversionTypeIndex) => (
        <option key={curConversionType} value={conversionTypeIndex + 1}>{curConversionType}</option>))
      }
    </select>
  );
}

export default ConversionTypeSelector;
