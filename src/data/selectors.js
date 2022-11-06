import {createDraftSafeSelector} from "@reduxjs/toolkit";


const selectSchemes = state => state.schemes

export const selectDbmlValue = createDraftSafeSelector(selectSchemes, schemes => schemes.dbmlScheme)


export const selectJsonSchemeObj = createDraftSafeSelector(selectSchemes, scheme => scheme.jsonScheme)
export const selectIsErrorJSONConversion = createDraftSafeSelector(selectJsonSchemeObj, obj => obj.isError)
export const selectJSONValue = createDraftSafeSelector(selectJsonSchemeObj, selectIsErrorJSONConversion, (shemeObj, isError) => {
  if (isError) {
    return shemeObj.errorMessage
  }
  return shemeObj.data
})

export const selectMDValue = createDraftSafeSelector(selectJSONValue, selectIsErrorJSONConversion, (schemes, isError) => {
  if (!isError) {
    return schemes.mdscheme
  }
  return ''
})





