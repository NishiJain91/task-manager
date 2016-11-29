import React, { Component, PropTypes } from 'react';

const ProjectCard = ({project,onProjectClick}) => (
  <div className="card-container" onClick={() => {onProjectClick(project)}}>
    <div className="card">
      <div className="card-content">
        <span className="card-title grey-text text-darken-3">{project.name}</span>
        <p className="grey-text">{project.description}</p>
        <span className="grey-text text-darken-3"><strong>Total Members:</strong> {Object.keys(project.members).length}</span>
      </div>
    </div>
  </div>
)

ProjectCard.propTypes = {
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
  onProjectClick: PropTypes.func.isRequired
}


export default ProjectCard;