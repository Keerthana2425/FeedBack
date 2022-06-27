import ActionTypes from '../constants/actionTypes';

const initialState = {
  users: [{
    id: 1,
    fullName: 'keerthana',
    category: 'programmer',
  }],
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export const logedinUserReducer = (state = {}, { type, payload } = {}) => {
  switch (type) {
    case ActionTypes.LOGEDIN_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
