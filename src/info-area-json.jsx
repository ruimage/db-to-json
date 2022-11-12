import React, {useEffect} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch, useSelector} from "react-redux";
import {setJsonObj} from "./data/dbml-slice";
import {
  selectJSONValue,
  selectTableDataConvertedToJSON,
  selectTopLevelTablesDataConvertedToJSON
} from "./data/selectors";

const dumb = () => {
}

function InfoAreaJSON() {

  const dispatch = useDispatch()
  const jsonData = useSelector(state => selectJSONValue(state))
  const tableData = useSelector(state => selectTableDataConvertedToJSON(state))
  const topLevelTableDateJSON = useSelector(state => selectTopLevelTablesDataConvertedToJSON(state))

  useEffect(() => {
    dispatch(setJsonObj())
  }, [jsonData, tableData])


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={topLevelTableDateJSON} onChange={dumb}/>
  );
}

export default InfoAreaJSON;
