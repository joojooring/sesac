// store.js

import { configureStore } from "@reduxjs/toolkit";
import registerReducer  from "../reducers/registerReducer";
import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: {
    user: registerReducer ,
    auth : authReducer
  },
});
export default store;

