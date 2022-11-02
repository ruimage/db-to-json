import InfoArea from "./components/InfoArea";
import Button from "./components/Button";
import ConversionTypeSelector from "./components/ConversionTypeSelector";
import convertDBMLStringToJSON from "./utils/converters";

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
`

const conversionTypes = [
  'GitLab',
  'Confluence (макрос Markup)',
  'Confluence без обязательности (макрос Markup)'
]

console.log(convertDBMLStringToJSON(testPlaceholder))

function App() {
  return (
    <>
      <h1>DB to JSON & DOC</h1>
      <p>Этот сайт поможет вам преобразовать структуру БД с сайта dbdiagram.io в заготовку JSON-ов и документации.
        Пример структуры БД.</p>

      <InfoArea areaLabel='bdStructure' caption='Структура БД' placeholder={testPlaceholder}/>
      <InfoArea areaLabel='JSONStructure' caption='Заготовка JSON'/>

      <ConversionTypeSelector types={conversionTypes}/>
      <Button caption='TO DOC TO JSON'/>

      <InfoArea areaLabel='JSONStructure' caption='Заготовка документации'/>
      <Button caption='Смотреть инструкцию'/>


    </>
  );
}

export default App;
