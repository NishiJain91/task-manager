import { ADD_NEW_PROJECT,SET_CURRENT_PROJECT } from '../constants';

// action creators
export function addProject(project){
  return {
    type: ADD_NEW_PROJECT,
    project: project
  }
}

export function goToProject(project){
  return {
    type: SET_CURRENT_PROJECT,
    project: project
  }
}