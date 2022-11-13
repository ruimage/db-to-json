import React, {useEffect} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch, useSelector} from "react-redux";
import {setJsonObj} from "./data/dbml-slice";
import {selectJSONValue, selectTablesDataWithFieldsToJSON} from "./data/selectors";

const dumb = () => {
}

function InfoAreaJSON() {

  const dispatch = useDispatch()
  const jsonData = useSelector(state => selectJSONValue(state))
  const tableDataWithFieldsJSON = useSelector(state => selectTablesDataWithFieldsToJSON(state))

  useEffect(() => {
    dispatch(setJsonObj())
  }, [jsonData, tableDataWithFieldsJSON])


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={tableDataWithFieldsJSON} onChange={dumb}/>
  );
}

export default InfoAreaJSON;
