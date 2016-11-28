import { combineReducers } from 'redux';

import { projects } from './dashboard.js';
import { activeProject } from './taskboard.js';

const taskManager = combineReducers({
  projects,
  activeProject
});

export default taskManager;