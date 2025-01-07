// actions.js
export const addUserDetails = (userDetails) => ({
    type: 'ADD_USER_DETAILS',
    payload: userDetails,
  });
  
  export const clearUserDetails = () => ({
    type: 'CLEAR_USER_DETAILS',
  });
  