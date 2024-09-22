import { AUTH_USER, LOGOUT, FORGOT_PASSWORD, SET_USER } from "../utils/constants";


const initialState = {
    name: "",
    mobile_number: "",
    email_id: "",
    card: {
        card_number: "",
        expiry: "",
        cvc: ""
    },
    password: ""
};



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        case SET_USER:
            return {
                ...state,
                ...action.payload
            }
        case FORGOT_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }

}

export default userReducer;