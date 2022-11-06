import React from 'react';
import styled from '@emotion/styled';


const conversionTypes = [
  'GitLab',
  'Confluence (макрос Markup)',
  'Confluence без обязательности (макрос Markup)',
];

function ConversionTypeSelector() {
  return (
    <StyledSelect name="conversion">
      {conversionTypes.map((curConversionType, conversionTypeIndex) => (
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


export default ConversionTypeSelector;
