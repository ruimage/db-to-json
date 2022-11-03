import styled from '@emotion/styled';
import React from 'react';
import InfoArea from './components/InfoArea';
import Button from './components/Button';
import ConversionTypeSelector from './components/ConversionTypeSelector';

const testPlaceholder = `//// -- LEVEL 1
//// -- Schemas, Tables and References

// Creating tables
// You can define the tables with full schema names
Table ecommerce.merchants {
  id int
  country_code int
  merchant_name varchar
  
  "created at" varchar
  admin_id int [ref: > U.id]
  Indexes {
    (id, country_code) [pk]
  }
}

// If schema name is omitted, it will default to "public" schema.
Table users as U {
  id int [pk, increment] // auto-increment
  full_name varchar
  created_at timestamp
  country_code int
}

Table countries {
  code int [pk]
  name varchar
  continent_name varchar
 }

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one; <> many-to-many
Ref: U.country_code > countries.code  
Ref: ecommerce.merchants.country_code > countries.code
`;

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
            placeholder={testPlaceholder}
          />
        </StyledGridFirstColumn>

        <StyledGridLastColumn>
          <InfoArea
            areaLabel="JSONStructure"
            caption="Заготовка JSON"
          />
        </StyledGridLastColumn>

      </StyledMainTextAreas>
      <ConversionTypeSelector types={conversionTypes} />
      <Button caption="TO DOC TO JSON" />

      <InfoArea areaLabel="JSONStructure" caption="Заготовка документации" />
      <Button caption="Смотреть инструкцию" />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-width: 90vw;
  display: flex;
  flex-direction: column;
`;

const StyledMainTextAreas = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;

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
