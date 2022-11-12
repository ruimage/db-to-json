import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectMDValue, selectTopLevelTablesDataConvertedToJSONForMD} from "./data/selectors";
import InfoArea from "./common-components/info-area";
import {setMD} from "./data/dbml-slice";

const dumb = () => {
}

function InfoAreaMdtable() {

  const dispatch = useDispatch()
  const topLevelTableDateJSONForMD = useSelector(state => selectTopLevelTablesDataConvertedToJSONForMD(state))

  useEffect(() => {
    dispatch(setMD(topLevelTableDateJSONForMD))
  })

  const mdTableData = useSelector(state => selectMDValue(state))
  return (
    <InfoArea areaLabel='mdtable' caption='Заготовка документации' content={mdTableData} onChange={dumb}/>
  );
}

export default InfoAreaMdtable;
