import {
  add_user,
  del_user,
  set_login,
  set_register,
} from '../Actions/ActionTypes';
export const addUserAction = (info) => ({
  type: add_user,
  payload: info,
});
export const delUserAction = (info) => ({
  type: del_user,
  payload: info,
});

export const setloginAction = (info) => ({
  type: set_login,
  payload: info,
});

export const setRegisterAction = (info) => ({
  type: set_register,
  payload: info,
});
