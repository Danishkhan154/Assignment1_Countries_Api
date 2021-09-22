import { DROPDOWN_STATE } from "./types";

const initialState = {
  countryData: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROPDOWN_STATE:
      let newState = { ...state }
      newState.countryData = action.payload;
      return newState
    default:
      return state;
  }
};

export default countryReducer;
