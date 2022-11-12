import React, {useCallback, useEffect, useState} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch} from "react-redux";
import {setDbml, setJson} from "./data/dbml-slice";

function InfoAreaDbml() {

  const dispatch = useDispatch()
  const [dbmlData, setDbmlData] = useState('')

  useEffect(() => {
    dispatch(setDbml(dbmlData))
    dispatch(setJson(dbmlData))
  }, [dbmlData])

  const onChangeDbml = useCallback((event) => {
    setDbmlData(event.target.value)
  }, [dbmlData])

  return (
    <InfoArea areaLabel="dbml" caption="Структура БД" content={dbmlData} onChange={onChangeDbml}/>
  );
}

export default InfoAreaDbml;
