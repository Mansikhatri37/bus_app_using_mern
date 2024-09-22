// TODO: write code to implement logics related to bus such as view_bus, select_bus, show_fares, etc.

import { GET_BUSES } from "../utils/constants";

export const getBuses = (data) => dispatch => {
    console.log("data", data);
    dispatch({ type: GET_BUSES, payload: data });
}


export const getBusOnRoute = (pickup, destination) => dispatch => {

}