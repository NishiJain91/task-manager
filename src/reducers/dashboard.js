import { ADD_NEW_PROJECT } from '../constants';

export const projects = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PROJECT:
      var newState = [...state,action.project];
      return newState;
    default:
      return state;
  }
}

