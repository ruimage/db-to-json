import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  name:PropTypes.string,
  caption:PropTypes.string,
  onClick:PropTypes.func
};

function Button({caption, onClick}) {
  return (
    <>
      <button onClick={onClick} title={caption}>{caption}</button>
    </>
  );
}

export default Button;
