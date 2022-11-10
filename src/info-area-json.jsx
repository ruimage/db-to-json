import React, {useCallback, useEffect} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch, useSelector} from "react-redux";
import {setJsonObj, setMD} from "./data/dbml-slice";
import {selectJSONValue, selectTableData} from "./data/selectors";

function InfoAreaJSON() {

  const dispatch = useDispatch()
  const jsonData = useSelector(state => selectJSONValue(state))
  const tableData = useSelector(state => selectTableData(state))

  console.log('tableData', tableData)
  
  useEffect(() => {
    dispatch(setMD(jsonData))
    dispatch(setJsonObj())
  }, [jsonData])

  const onCh = useCallback(() => {
    return false
  })


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={jsonData} onChange={onCh}/>
  );
}

export default InfoAreaJSON;
