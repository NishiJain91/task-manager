import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard.component.js';
import { addProject,goToProject }  from '../../actions/dashboardActions.js';


const mapDispatchToProps = (dispatch) => {
    return {
        onProjectClick: (project) => {
            dispatch(goToProject(project));
            browserHistory.push('/projects/'+project.id);
        },
        addProject: (project) => {
            dispatch(addProject(project));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;