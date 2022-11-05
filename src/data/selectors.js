import {createDraftSafeSelector} from "@reduxjs/toolkit";


const selectSchemes = state => state.schemes


export const getDbmlValue = createDraftSafeSelector(selectSchemes, schemes => schemes.dbmlScheme)
export const getJSONValue = createDraftSafeSelector(selectSchemes, schemes => schemes.jsonScheme)
export const getMDValue = createDraftSafeSelector(selectSchemes, schemes => schemes.mdScheme)





