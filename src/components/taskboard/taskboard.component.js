// ./src/taskboard/taskboard.component.jsx
import React, { Component, PropTypes } from 'react';

import TaskCard from './taskCard.js';
import Header from '../common/header.js';
import AddCardContainer from '../common/addCardLayout.js';
import { taskFormFields } from '../../configs/projects.js';


class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableAddMember: false,
      newMemberName: ''
    }
  }
  dragEnd(ev){
    ev.preventDefault();
    return true;
  }
  dragDrop(ev){
   ev.preventDefault();
   this.taskDetails.newAssignee = $(ev.target).closest('.member-section').attr('data-attr');
   this.props.reassignTask(this.taskDetails);
   return false;
  }
  dragOver(ev){
     ev.preventDefault();
     return false;
  }
  dragStart(task,member){
    event.preventDefault();
    this.taskDetails = {
      currentAssignee: member ,
      task: task
    };
    event.dropEffect = "move";
  }
  enableAddMember(status){
    this.setState({
      enableAddMember: status
    })
  }
  handleChange(event){
    this.setState({
      newMemberName: event.target.value
    })
  }
  addNewMember(event){
    this.props.addMember(this.state.newMemberName);
    this.setState({
      enableAddMember: false,
      newMemberName: ''
    });
  }
  render(){
    const { project,onProjectExit,changeTaskStatus,addMember,addTask } = this.props;
    const _this = this;
    return (
        <div>
          <Header title={project.name} closeHandler={onProjectExit} />
          <div className="align-center scrum-container">
            <ul className="scrum-board">
              {
                Object.keys(project.members).map(member => {
                  return(
                    <li key={member} data-attr={member} className="member-section">
                      <div className="card-container">
                        <div className="card">
                          <div className="card-content center">
                            <span className="card-title grey-text text-darken-1 member-details">{project.members[member].name}</span>
                          </div>
                        </div>
                      </div>
                      {
                        project.members[member].tasks.map(task => {
                          return (
                            <div key={member+task.id} className="clearfix">
                              <TaskCard task={task} member={member} changeTaskStatus={changeTaskStatus} changeStatus={changeTaskStatus} dragStart={_this.dragStart.bind(_this)}/>
                            </div>
                          )
                        })
                      }
                      <div onDragEnter={this.dragEnter} onDrop={this.dragDrop.bind(this)} onDragOver={this.dragOver}>
                        <AddCardContainer title="Create Task" addHandler={addTask} config={{memberId: member}} addCardFormFields={taskFormFields} />
                      </div>
                    </li>
                  )
                })
              }
              <li className="member-section">
                <div className="card-container">
                  <div className="card">
                    <div className="card-content center pointer add-member">
                      {(this.state.enableAddMember)
                        ?
                      <div className="input-field">
                        <input id="member" placeholder="Member Name" type="text" onChange={_this.handleChange.bind(_this)}/>
                        <a className="btn-floating btn-large waves-effect waves-light teal accent-4" onClick={_this.addNewMember.bind(_this)}><i className="material-icons">add</i></a>
                      </div>
                        :
                      <span className="card-title grey-text text-lighten-1 member-details" onClick={_this.enableAddMember.bind(_this,true)}>Add New Member</span>
                      }
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
  }
};


TaskBoard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.objectOf(PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        tasks: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          description: PropTypes.string,
          name: PropTypes.string.isRequired  
        }))
      }
    ))
  }).isRequired,
  onProjectExit: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  reassignTask: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  changeTaskStatus: PropTypes.func.isRequired
}


export default TaskBoard;