// reducers/journeyReducer.js

const initialState = {
    pickup: '',
    destination: '',
    date: null,
  };

  
  
  const journeyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOURNEY_DETAILS':
        return {
          ...state,
          pickup: action.payload.pickup,
          destination: action.payload.destination,
          date: action.payload.date,
        };
      case 'CLEAR_JOURNEY_DETAILS':
        return {
          ...state,
          pickup: '',
          destination: '',
          date: null,
        };
      default:
        return state;
    }
  };
  
  export default journeyReducer;
  