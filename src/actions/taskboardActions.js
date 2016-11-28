import { ADD_NEW_TASK,CHANGE_TASK_STATUS,REASSIGN_TASK,ADD_NEW_MEMBER } from '../constants';

// action creators
export function addTask(task){
  return {
    type: ADD_NEW_TASK,
    task: task
  }
}

export function changeTaskStatus(taskDetails){
  return {
    type: CHANGE_TASK_STATUS,
    task: taskDetails
  }
}

export function reassignTask(taskDetails){
  return {
    type: REASSIGN_TASK,
    task: taskDetails
  }
}

export function addNewMember(member){
  return {
    type: ADD_NEW_MEMBER,
    member: member
  }
}