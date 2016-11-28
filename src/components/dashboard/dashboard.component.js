// ./src/car/car.component.jsx
import React, { Component, PropTypes } from 'react';
import ProjectCard from './projectCard.js';
import Header from '../common/header.js';
import AddCardContainer from '../common/addCardLayout.js';
import { projectFormFields } from '../../configs/projects.js';


class Dashboard extends Component {

  addNewProject(project){
    let newProject = project;
    newProject.id = this.props.projects.length+1;
    
    let members = project.members.split(',');
    newProject.members = {};
    if(members.length >= 1){
      members.map((member,index)=>{
        var memberObj = {
          id: index+1,
          name: member ? member : 'Project',
          tasks:[]
        };
        newProject.members['member_'+index] = memberObj; 
      });
    }
    
    this.props.addProject(newProject);
  }

  render(){
    const { projects,onProjectClick } = this.props;
    return (
      <div>
        <Header title="Task Management" />
        <div className="align-center dashboard-container">
          {projects.map(project => {
            return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onProjectClick={onProjectClick}
                />
              )
          })}
          <AddCardContainer title="Create New Project" addHandler={this.addNewProject.bind(this)} config={{}} addCardFormFields={projectFormFields} />
        </div>
      </div>
    )
  }
}
 


Dashboard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  onProjectClick: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired
}


export default Dashboard;