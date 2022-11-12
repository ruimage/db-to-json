import React, {useEffect} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch, useSelector} from "react-redux";
import {setJsonObj, setMD} from "./data/dbml-slice";
import {
  selectJSONValue,
  selectTableDataConvertedToJSON,
  selectTopLevelTablesDataConvertedToJSON,
  selectTopLevelTablesDataConvertedToJSONForMD
} from "./data/selectors";

function InfoAreaJSON() {

  const dispatch = useDispatch()
  const jsonData = useSelector(state => selectJSONValue(state))
  const tableData = useSelector(state => selectTableDataConvertedToJSON(state))
  const topLevelTableDateJSON = useSelector(state => selectTopLevelTablesDataConvertedToJSON(state))
  const topLevelTableDateJSONForMD = useSelector(state => selectTopLevelTablesDataConvertedToJSONForMD(state))

  useEffect(() => {
    dispatch(setMD(topLevelTableDateJSONForMD))
    dispatch(setJsonObj())
  }, [jsonData, tableData])


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={topLevelTableDateJSON}/>
  );
}

export default InfoAreaJSON;
