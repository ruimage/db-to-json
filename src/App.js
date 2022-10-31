import InfoArea from "./components/InfoArea";
import Button from "./components/Button";
import ConversionTypeSelector from "./components/ConversionTypeSelector";

const testPlaceholder ='// Пример тестовой таблицы\n' +
  'Table example_table [note: \'Название таблицы\'] {\n' +
  '  example varchar [note: \'До первой точки название. После точки комментарий\']\n' +
  '}\n' +
  '\n' +
  'Table request [note: \'Заявки\'] {\n' +
  '  id uuid [pk, note: \'Идентификатор\']\n' +
  '  number varchar [null, note: \'Номер\']\n' +
  '  type varchar [not null, note: \'Тип. Тип заявки: "FIRST", "SECOND" или "THIRD"\']\n' +
  '  date_created date [not null, default: `now()`, note: \'Дата создания. Заполняется текущей датой\']\n' +
  '}'

const conversionTypes = [
  'GitLab',
  'Confluence (макрос Markup)',
  'Confluence без обязательности (макрос Markup)'
]

function App() {
  return (
    <>
      <h1>DB to JSON & DOC</h1>
      <p>Этот сайт поможет вам преобразовать структуру БД с сайта dbdiagram.io в заготовку JSON-ов и документации. Пример структуры БД.</p>

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
