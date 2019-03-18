import { GET_USER, UPDATE_USER, DELETE_USER } from "../constants/actionTypes";
import { getUser, updateUser, deleteUser,getAllUser } from "../services/user";

export const getUserDetails = (email, password) => dispatch => {
  return getUser(email, password).then(user => {
    return dispatch({
      type: GET_USER,
      id: user.id,
      fname: user.fname,
      lname: user.lname,
      mail: user.mail,
      notifications: user.notifications,
      isAdmin: user.isAdmin
    });
  });
};

export const updateUserDetails = (fname, lname, mail) => dispatch => {
  return updateUser(fname, lname, mail).then(user => {
    dispatch({
      type: UPDATE_USER,
      fname: user.fname,
      lname: user.lname,
      mail: user.mail
    });
  });
};

export const deleteUserDetails = id => dispatch => {
  return deleteUser(id).then(() => {
    dispatch({
      type: DELETE_USER
    });
  });
};

export const allUserDetails = (email, password) => dispatch => {
  return getAllUser(email, password).then(users => {
    return dispatch({
      type: GET_USER,
      users
    });
  });
};
