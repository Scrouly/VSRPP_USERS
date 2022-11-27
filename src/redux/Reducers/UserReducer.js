import { add_user, del_user } from '../Actions/ActionTypes';
import { set_login } from '../Actions/ActionTypes';
const defaultState = {
  users: [
    {
      id: 1,
      firstname: 'Jhon',
      lastname: 'Conte',
      email: 'some@mail.com',
      age: 32,
    },
    {
      id: 2,
      firstname: 'Nika',
      lastname: 'Zalman',
      email: 'some@mail.com',
      age: 41,
    },
  ],
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case add_user:
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

    case del_user:
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.payload),
      };

    default:
      return state;
  }
};
