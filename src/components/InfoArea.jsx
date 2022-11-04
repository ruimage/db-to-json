import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 25vh;
`;

function InfoArea({ caption, areaLabel, placeholder }) {
  return (
    <>
      <h2>{caption}</h2>
      <StyledTextArea name={areaLabel} id={areaLabel} defaultValue={placeholder} />
    </>
  );
}

InfoArea.propTypes = {
  // eslint-disable-next-line react/require-default-props
  caption: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  areaLabel: PropTypes.string,
  placeholder: PropTypes.string,
};

InfoArea.defaultProps = {
  placeholder: '',
};

export default InfoArea;
