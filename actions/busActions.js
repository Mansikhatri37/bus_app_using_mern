// busActions.js
import { GET_BUSES } from "../utils/constants";

export const getBuses = (data) => (dispatch) => {
  dispatch({ type: GET_BUSES, payload: data });
};
