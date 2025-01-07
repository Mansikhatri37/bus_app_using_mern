// busReducer.js
import { GET_BUSES } from "../utils/constants";

const initialState = {
  bus: [],
  selectedBus: null, // Store selected bus info
};

const busReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUSES:
      return {
        ...state,
        bus: action.payload,
      };
    default:
      return state;
  }
};

export default busReducer;
