/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dbmlScheme: '',
  jsonScheme: '',
  mdscheme: '',
};

export const SchemeDataSlice = createSlice({
  name: 'schemes',
  initialState,
  reducers: {
    setDbml: (state, action) => {
      state.dbmlScheme = action.payload;
    },
    setJson: (state, action) => {
      state.jsonScheme = action.payload;
    },
    setMD: (state, action) => {
      state.mdscheme = action.payload;
    },
  },
});

export const {setDbml, setJson, setMD} = SchemeDataSlice.actions;
export default SchemeDataSlice.reducer;
