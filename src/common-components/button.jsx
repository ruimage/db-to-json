import React from 'react';
import PropTypes from 'prop-types';

function Button({ caption, onClick }) {
  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={onClick} title={caption}>{caption}</button>
    </>
  );
}

Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  caption: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};

export default Button;
