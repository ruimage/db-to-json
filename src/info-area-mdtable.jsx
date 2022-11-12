import React from 'react';
import {useSelector} from "react-redux";
import {selectMDValue} from "./data/selectors";
import InfoArea from "./common-components/info-area";

function InfoAreaMdtable() {

  const mdTableData = useSelector(state => selectMDValue(state))
  return (
    <InfoArea areaLabel='mdtable' caption='Заготовка документации' content={mdTableData} onChange={true}/>
  );
}

export default InfoAreaMdtable;
