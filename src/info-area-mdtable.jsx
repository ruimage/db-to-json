import React from 'react';
import {useSelector} from "react-redux";
import {selectTablesDataWithFieldsToJSONForMD, selectTopLevelTablesDataConvertedToJSONForMD} from "./data/selectors";
import InfoArea from "./common-components/info-area";
import {convertJsonToMarkdown} from "./utils/converters";

const dumb = () => {
}

function InfoAreaMdtable() {


  const tableDataJSONForMD = useSelector(state => selectTopLevelTablesDataConvertedToJSONForMD(state))
  const fieldDataJSONForMD = useSelector(state => selectTablesDataWithFieldsToJSONForMD(state))


  const tablesMD = tableDataJSONForMD ? convertJsonToMarkdown(tableDataJSONForMD) : ''
  const fieldsMD = fieldDataJSONForMD ? convertJsonToMarkdown(fieldDataJSONForMD) : ''

  const mdData = `Tables
${tablesMD}
  
  Fields
${fieldsMD}`

  return (
    <InfoArea areaLabel='mdtable' caption='Заготовка документации' content={mdData} onChange={dumb}/>
  );
}

export default InfoAreaMdtable;
