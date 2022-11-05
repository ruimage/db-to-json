import React, {useCallback, useEffect, useState} from 'react';
import InfoArea from './common-components/info-area';
import {useDispatch} from "react-redux";
import {setJson} from "./data/dbml-slice";

function InfoAreaJSON() {


  const dispatch = useDispatch()
  const [jsonData, setJsonData] = useState('')

  useEffect(() => {
    //  console.log(useSelector(getjsonValue()))
  }, [])

  useEffect(() => {
    dispatch(setJson(jsonData))
  }, [jsonData])

  const onChangejson = useCallback((event) => {
    setJsonData(event.target.value)
  })


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={jsonData} onChange={onChangejson}/>
  );
}

export default InfoAreaJSON;
