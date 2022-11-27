import { set_login, set_register } from '../Actions/ActionTypes';
import { setloginAction } from '../Actions/UserActions';
const defaultState = {
  login: [],
  registration: [],
  redirect: [],
};

export const AutorisationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case set_login:
      if (state.users.length === 0) {
        const id = state.users.length + 1;
        return {
          ...state,
          users: [...state.users, { id, ...action.payload }],
        };
      } else {
        const id = state.users.slice(-1)[0].id + 1;
        return {
          ...state,
          users: [...state.users, { id, ...action.payload }],
        };
      }

    case set_register:
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.payload),
      };

    default:
      return state;
  }
};
