import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

InfoArea.propTypes = {
  caption: PropTypes.string,
  areaLabel: PropTypes.string,
  placeholder: PropTypes.string
};

InfoArea.defaultProps = {
  placeholder: ''
}

const StyledInfoArea = styled.div`

`

const StyledTextArea = styled.textarea`
  width: 100%;
`

function InfoArea({caption, areaLabel, placeholder}) {
  return (
    <StyledInfoArea>
      <h2>{caption}</h2>
      <StyledTextArea name={areaLabel} id={areaLabel} defaultValue={placeholder}></StyledTextArea>
    </StyledInfoArea>
  );
}

export default InfoArea;
