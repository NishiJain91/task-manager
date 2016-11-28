// ./src/index.jsx
import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Import routing components
import {Router, Route, browserHistory, Redirect} from 'react-router';

import DashboardContainer from './components/dashboard/dashboard.container.js';
import TaskBoardContainer from './components/taskboard/taskboard.container.js';
import taskManager from './reducers/combineReducers.js';
import { persistedState } from './configs/projects.js';

const store = createStore(taskManager,persistedState);

const Root = ({store}) => (
		<Provider store={store}>
		    <Router path="/" history={browserHistory}>
				<Route path="/projects" name="projects" component={DashboardContainer} />
		        <Route path="/projects/:id" component={TaskBoardContainer} />
		        <Redirect from="/" to="projects" />
		    </Router>
		</Provider>
);

Root.propTypes =  {
  store: PropTypes.object.isRequired  
};

render(React.createElement(Root,{store:store}),document.getElementById('container'));