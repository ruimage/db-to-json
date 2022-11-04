/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dbmlScheme: '',
  jsonScheme: '',
  mdscheme: '',
};

export const dbmlSlice = createSlice({
  name: 'dbmlData',
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

export const { setDbml, setJson, setMD } = dbmlSlice.actions;
export default dbmlSlice.reducer;
