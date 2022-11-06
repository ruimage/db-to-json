import {createDraftSafeSelector} from "@reduxjs/toolkit";


const selectSchemes = state => state.schemes

export const selectDbmlValue = createDraftSafeSelector(selectSchemes, schemes => schemes.dbmlScheme)

const getIsError = obj => obj.isError
const getValue = (obj, isError) => {
  if (isError) {
    return obj.errorMessage
  }
  return obj.data
}

export const selectJsonSchemeObj = createDraftSafeSelector(selectSchemes, scheme => scheme.jsonScheme)
export const selectIsErrorJSONConversion = createDraftSafeSelector(selectJsonSchemeObj, getIsError)
export const selectJSONValue = createDraftSafeSelector(selectJsonSchemeObj, selectIsErrorJSONConversion, getValue)

export const selectMDSchemeObj = createDraftSafeSelector(selectSchemes, scheme => scheme.mdscheme)
export const selectIsErrorMDNConversion = createDraftSafeSelector(selectMDSchemeObj, getIsError)
export const selectMDValue = createDraftSafeSelector(selectMDSchemeObj, selectIsErrorMDNConversion, getValue)





