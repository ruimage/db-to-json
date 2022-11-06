import React, {useCallback, useEffect} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch, useSelector} from "react-redux";
import {selectJSONValue} from "./data/selectors";
import {setMD} from "./data/dbml-slice";

function InfoAreaJSON() {
  
  const dispatch = useDispatch()
  const jsonData = useSelector(state => selectJSONValue(state))

  useEffect(() => {
    dispatch(setMD(jsonData))
  }, [jsonData])

  const onCh = useCallback(() => {
    return false
  })


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={jsonData} onChange={onCh}/>
  );
}

export default InfoAreaJSON;
