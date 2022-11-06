/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import {convertDBMLStringToJSON, convertJsonToMarkdown} from "../utils/converters";

const initialState = {
  dbmlScheme: '',
  jsonScheme: {
    isError: false,
    data: '',
    errorMessage: ''
  },
  mdscheme: {
    isError: false,
    data: '',
    errorMessage: ''
  },
};

export const SchemeDataSlice = createSlice({
  name: 'schemes',
  initialState,
  reducers: {
    setDbml: (state, action) => {
      state.dbmlScheme = action.payload;
    },
    setJson: (state, action) => {
      try {
        state.jsonScheme.isError = false
        state.jsonScheme.data = convertDBMLStringToJSON(action.payload);
        state.jsonScheme.errorMessage = ''
      } catch (e) {
        state.jsonScheme.isError = true
        state.jsonScheme.data = ''
        state.jsonScheme.errorMessage = e.message
      }
    },
    setMD: (state, action) => {
      const jsonValue = action.payload
      if (!jsonValue && !state.jsonScheme.isError) {
        state.mdscheme.isError = false
        state.mdscheme.data = ''
        return
      }
      try {
        state.mdscheme.data = convertJsonToMarkdown(jsonValue)
        state.mdscheme.isError = false
        state.mdscheme.errorMessage = ''
      } catch (e) {
        state.mdscheme.isError = true
        state.mdscheme.data = ''
        state.mdscheme.errorMessage = e
      }
    }
  },
});

export const {setDbml, setJson, setMD} = SchemeDataSlice.actions;
export default SchemeDataSlice.reducer;
