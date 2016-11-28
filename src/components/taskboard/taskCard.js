// ./src/car/car.component.jsx
import React, { Component,PropTypes,cx } from 'react';

class TaskCard extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var _this = this;

    $(document).ready(() => {
      $('select').material_select();
    });

    $('ul.dropdown-content li').click(function(){
      let memberId = $(event.target).closest('.member-section').attr('data-attr');
      let status = event.target.innerHTML;
      let taskId = $(event.target).closest('.card-container').attr('data-attr');
      _this.props.changeStatus(memberId,taskId,status);
    });
  }
  getStatusColor(status){
    switch(status){
      case 'On Hold':
        return 'bl-red';
      case 'Sent':
        return 'bl-yellow';
      case 'Done':
        return 'bl-green';
      case 'In Process':
        return 'bl-blue';
      case 'Schedule':
        return 'bl-teal';
    }
  }
  render(){
    const { task,dragStart,member } = this.props;
    let className = this.getStatusColor(this.props.task.status);

    return (
      <div className="card-container" data-attr={task.id}>
        <div className={"card "+className} draggable="true" onDragStart={()=>{dragStart(task,member)}}>
          <div className="card-content">
            <span className="card-title grey-text text-darken-3 member-details">{task.name}</span>
            <div className={"status-bar "+className}>
                <select defaultValue={task.status}>
                  <option value="Done">Done</option>
                  <option value="On Hold">On Hold</option>
                  <option value="In Process">In Process</option>
                  <option value="Sent">Sent</option>
                  <option value="Schedule">Schedule</option>
                </select>
                <label className="white-text">{this.props.task.status}</label>
             </div>
            <p className="grey-text text-darken-3">{task.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

TaskCard.propTypes = {
  task: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        assignedTo: PropTypes.string,
        status: PropTypes.string
  }),
  dragStart: PropTypes.func,
  changeStatus: PropTypes.func,
  member: PropTypes.string.isRequired
};

export default TaskCard;