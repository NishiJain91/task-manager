// ./src/taskboard/taskboard.container.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import TaskBoard from './taskboard.component.js';
import { goToProject }  from '../../actions/dashboardActions.js';
import { addTask,changeTaskStatus,reassignTask,addNewMember }  from '../../actions/taskboardActions.js';


const mapDispatchToProps = (dispatch) => {
    return {
        onProjectExit: () => {
            dispatch(goToProject({}));
            browserHistory.push('/');
        },
        addTask: (task,member) => {
            let taskDetails = {
                memberId: member.memberId,
                task: task
            };
            dispatch(addTask(taskDetails));
        },
        reassignTask: (taskDetails) => {
        	dispatch(reassignTask(taskDetails));
        },
        addMember: (member) => {
        	dispatch(addNewMember(member));
        },
        changeTaskStatus: (memberId,taskId,status) => {
            let taskDetails = {
                memberId: memberId,
                taskId: taskId,
                status: status || 'Done' //default status
            }
        	dispatch(changeTaskStatus(taskDetails));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        project: state.activeProject
    }
};

const TaskBoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskBoard);

export default TaskBoardContainer;