import {configureStore} from '@reduxjs/toolkit';
import SchemeDataSliceReducer from "./dbml-slice";

const store = configureStore(
  {
    reducer: {
      schemes: SchemeDataSliceReducer
    },
  },
);

export default store;
