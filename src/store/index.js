import countryReducer from "./countryData/reducer";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
   countryReducer
  ,
  compose(applyMiddleware(thunk))
);

export default store;
