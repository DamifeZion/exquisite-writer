// src/store/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import navSlice from "./slices/nav-slice";

const rootReducer = combineReducers({
   navSlice,
});

export default rootReducer;
