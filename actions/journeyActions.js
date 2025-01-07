// actions/journeyActions.js

export const setJourneyDetails = (pickup, destination, date) => ({
    type: 'SET_JOURNEY_DETAILS',
    payload: { pickup, destination, date },
  });
  
  export const clearJourneyDetails = () => ({
    type: 'CLEAR_JOURNEY_DETAILS',
  });
  