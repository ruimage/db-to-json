import styled from '@emotion/styled';
import React from 'react';
import InfoArea from './components/InfoArea';
import Button from './components/Button';
import ConversionTypeSelector from './components/ConversionTypeSelector';

const conversionTypes = [
  'GitLab',
  'Confluence (макрос Markup)',
  'Confluence без обязательности (макрос Markup)',
];

function App() {
  return (
    <StyledApp>
      <h1>DB to JSON & DOC</h1>
      <p>
        {/* eslint-disable-next-line max-len */}
        Этот сайт поможет вам преобразовать структуру БД с сайта dbdiagram.io в заготовку JSON-ов и документации.
        Пример структуры БД.
      </p>

      <StyledMainTextAreas>
        <StyledGridFirstColumn>
          <InfoArea
            areaLabel="bdStructure"
            caption="Структура БД"
          />
        </StyledGridFirstColumn>

        <StyledGridLastColumn>
          <InfoArea
            areaLabel="JSONStructure"
            caption="Заготовка JSON"
          />
        </StyledGridLastColumn>

      </StyledMainTextAreas>
      <StyledControls>
        <ConversionTypeSelector types={conversionTypes} />
        <Button caption="TO DOC TO JSON" />
      </StyledControls>

      <InfoArea areaLabel="JSONStructure" caption="Заготовка документации" />
      <Button caption="Смотреть инструкцию" />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

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

const StyledControls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default App;
