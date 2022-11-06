import styled from '@emotion/styled';
import React from 'react';
import Button from './common-components/button';
import InfoAreaDbml from './info-area-dbml';
import InfoAreaJSON from './info-area-json';
import InfoAreaMdtable from "./info-area-mdtable";


function App() {
  return (
    <StyledApp>

      <StyledRowSection>
        <h1>DB to JSON & MD</h1>
        <p>
          {/* eslint-disable-next-line max-len */}
          Этот сайт поможет вам преобразовать структуру БД с сайта <a href="https://dbdiagram.io">dbdiagram.io </a> в
          заготовку JSON-ов и документации.
        </p>
      </StyledRowSection>

      <StyledMainTextAreas>

        <StyledGridFirstColumn>
          <InfoAreaDbml/>
        </StyledGridFirstColumn>

        <StyledGridLastColumn>
          <InfoAreaJSON/>
        </StyledGridLastColumn>

      </StyledMainTextAreas>

      <InfoAreaMdtable/>
      <Button caption="Смотреть инструкцию"/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledRowSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledMainTextAreas = styled.div`
  display: grid;
  grid-template-columns: 3fr 0.1fr 3fr;
`;

const StyledGridFirstColumn = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const StyledGridLastColumn = styled.div`
  grid-column-start: -1;
  grid-column-end: -2;
`;


export default App;
