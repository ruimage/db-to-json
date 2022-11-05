import React, {useCallback} from 'react';
import InfoArea from './common-components/info-area';
import {useSelector} from "react-redux";
import {getJSONValue} from "./data/selectors";

function InfoAreaJSON() {


  const jsonData = useSelector(state => getJSONValue(state))


  const onCh = useCallback(() => {
    return false
  })


  return (
    <InfoArea areaLabel="json" caption="Заготовка JSON" content={jsonData} onChange={onCh}/>
  );
}

export default InfoAreaJSON;
