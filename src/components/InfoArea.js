import React from 'react';
import PropTypes from 'prop-types';

InfoArea.propTypes = {
  caption: PropTypes.string,
  areaLabel: PropTypes.string,
  placeholder: PropTypes.string
};

InfoArea.defaultProps = {
  placeholder: ''
}

function InfoArea({caption, areaLabel, placeholder}) {
  return (
    <>
      <h2>{caption}</h2>
      <textarea name={areaLabel} id={areaLabel} defaultValue={placeholder}></textarea>
    </>
  );
}

export default InfoArea;
