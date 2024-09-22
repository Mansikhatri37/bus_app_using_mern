
import axios from 'axios';
import {
  AUTH_USER,
  LOGOUT,
  FORGOT_PASSWORD,
  SET_USER,
} from "../utils/constants";
export const SEND_OTP_REQUEST = 'SEND_OTP_REQUEST';
export const SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS';
export const SEND_OTP_FAILURE = 'SEND_OTP_FAILURE';

export const authFromPhone = (phoneNumber) => async (dispatch) => {
  dispatch({ type: SEND_OTP_REQUEST });
  try {
    const response = await axios.post('/api/send-otp', { phoneNumber });
    dispatch({ type: SEND_OTP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SEND_OTP_FAILURE, payload: error.message });
  }
};

export const authFromMobile = (mobile_number) => (dispatch) => {
  // Write actual logic to get OTP from server and verify if user exists
  // If user exists, dispatch AUTH_USER action with user details
  // If user doesn't exist, dispatch AUTH_USER action with null
  const user = {
    mobile_number: "9398775848",
    name: "John Doe",
    email_id: "john@example.com",
    password: "123456",
    gender: "Male",
  };
  dispatch({ type: AUTH_USER, payload: user });
};

// Actions are higher order functions that consume the dispatch function from the store
export const editProfile = (data) => (dispatch) => {
  dispatch({ type: SET_USER, payload: data });
};
