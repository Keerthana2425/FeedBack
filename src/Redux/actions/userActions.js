import ActionTypes from '../constants/actionTypes';

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});

export const logedinUser = (user) => ({
  type: ActionTypes.LOGEDIN_USER,
  payload: user,
});

// export const logedoutUser=(user)=>{
//   return{
//     type:ActionTypes.LOGEDOUT_USER,
//     payload:user
//   }
// }
