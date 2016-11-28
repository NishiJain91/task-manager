import React, { Component, PropTypes } from 'react';
import Form from './form.js';

class AddNewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  toggleFormVisibility(status){
    event.stopPropagation();
    this.setState({showForm: status});
  }
  render(){
    const { title,addHandler,addCardFormFields,config } = this.props;
    let className = this.state.showForm ? "active" : "";
    return (
      <div className="form-container">
        <div className="card-container">
          <div className="card form-card" onClick={()=> this.toggleFormVisibility(true)}>
            <div className={"card-content "+className}>
              <div className="add-container">
                <svg className={className} fill={this.state.showForm ? 'red':'black'} viewBox="0 0 24 24">
                    <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
                <p className={this.state.showForm ? "teal-text text-accent-4" : "grey-text text-lighten-1"}>{title}</p>
              </div>
            </div>
          </div>
          {
            (addCardFormFields)&&(this.state.showForm)
            &&
            (<div className="form-dailog">
              <div className="card">
                <div className="card-content">
                  <div className="card-panel">
                     <span>{title}</span>
                  </div>
                  <Form formFields={addCardFormFields} submitHandler={addHandler} config={config} cancelHandler={this.toggleFormVisibility.bind(this)}/>
                </div>
              </div>
            </div>)
          }
        </div>
        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}

AddNewContainer.propTypes = {
  title: PropTypes.string.isRequired,
  addHandler: PropTypes.func.isRequired,
  addCardFormFields: PropTypes.array,
  config: PropTypes.object
}


export default AddNewContainer;