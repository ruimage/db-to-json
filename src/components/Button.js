import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

Button.propTypes = {
  name: PropTypes.string,
  caption: PropTypes.string,
  onClick: PropTypes.func
};


const StyledButton = styled(Button)`

`


function Button({caption, onClick}) {
  return (
    <StyledButton>
      <button onClick={onClick} title={caption}>{caption}</button>
    </StyledButton>
  );
}

export default Button;
