import { SET_CURRENT_PROJECT,ADD_NEW_TASK,CHANGE_TASK_STATUS,REASSIGN_TASK,ADD_NEW_MEMBER } from '../constants';

export const activeProject = (state = null,action) => {
	switch (action.type){
		case SET_CURRENT_PROJECT:
            return action.project;

        case ADD_NEW_TASK:
            let newState = Object.assign({},state);
            let { memberId,task } = action.task;
            task.id = newState.members[memberId].tasks.length + 1;
            newState.members[memberId].tasks.push(task); 
            return newState;

        case REASSIGN_TASK:
            let reassignedState = Object.assign({},state);
            let taskDetails = action.task;
            let newAssigneeTasks = reassignedState.members[taskDetails.newAssignee].tasks;
            let currentAssigneeTasks = reassignedState.members[taskDetails.currentAssignee].tasks;
            currentAssigneeTasks.some(function(task,index){
                if(task.id == taskDetails.task.id){
                    currentAssigneeTasks.splice(index,1);
                    return true;
                }
            });
            taskDetails.task.id = newAssigneeTasks.length + 1;
            newAssigneeTasks.push(taskDetails.task);
            return reassignedState;

        case CHANGE_TASK_STATUS:
            let updatedState = Object.assign({},state);
            updatedState.members[action.task.memberId].tasks.some((task)=>{
                if(task.id == action.task.taskId){
                    task.status = action.task.status;
                    return true;
                }
            });
            return updatedState;

        case ADD_NEW_MEMBER:
            let recentState = Object.assign({},state);
            let id = recentState.members.length+1;
            recentState.members['member_'+id] = {
                id: id,
                name: action.member,
                tasks: []
            }
            return recentState;     
    	default:
      	return state;
	}
}

