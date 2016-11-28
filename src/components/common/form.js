import React, { Component, PropTypes } from 'react';

class Form extends Component{
	constructor(props) {
		super(props);
		
		this.state = this.getDataAndCreateState(this.props.formFields);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	getDataAndCreateState(formFields){
		var States = {};
		// set state property for each form field
		formFields.map(field => {
			switch(field.type){
				case 'select':
					States[field.name] = [];
					break;
				default:
					States[field.name] = field.defaultValue || '';
			}
		});

		return States;
	}

	componentDidMount() {
		$(document).ready(() => {
		  $('select').material_select();
		});
	}

	getFormField(field){
		var formField;
		switch(field.type){
			case 'text':
				formField = (<input id={field.name} type ={field.type} placeholder={field.placeholder} className=""  value={this.state[field.name]} onChange={this.handleFormChange}/>)
				break;
			case 'textarea':
				formField = (<textarea id={field.name} placeholder={field.placeholder} className="" value={this.state[field.name]} onChange={this.handleFormChange}></textarea>);
				break;
			case 'select':
				formField = (<select id={field.name} multiple={field.multiple} value={this.state[field.name]} onChange={this.handleFormChange}>
                                <option value="" disabled defaultValue>Select</option>
                                {
                                    field.options.map((fieldOpt,index) => {
                                        return (<option key={fieldOpt.name+index} value={fieldOpt.value}>{fieldOpt.value}</option>)
                                    })
                                }
                            </select>);
				
				break;
		}
		return formField;
	}

	handleFormChange(event){
		//update field state
		this.state[event.target.id] = event.target.value;
		this.setState(this.state);
	}
	
	submitForm(){
		// materialize doesn't support onChange on select field, handled explicitly
		this.handleSelectFields();
		this.props.submitHandler(this.state,this.props.config);
		this.props.cancelHandler(false);
	}

	handleSelectFields(event){
		let _this = this;
		$('.select-wrapper').each(function(){
			let val = '';
			$(this).find('li.active').map(function(){
				val = val.length ? val+','+this.innerText : this.innerText;

			});
			let fieldId = $(this).find('select.initialized').attr('id');
			_this.state[fieldId] = val;	
		});
	}

	render(){
		const { formFields } = this.props;
		return(
			<div>
				<div className="row">
				    <form className="col s12">
				      <div className="row">
				      	{
							formFields.map(field => {
				        		return (<div key={field.name} className="input-field col s12">
											{this.getFormField(field)}
											<label htmlFor={field.name}>{field.label}</label>
										</div>)
								})
						}
				      </div>
				    </form>
				 </div>
				 <div className="card-action">
	              <button className="btn waves-effect waves-light  transparent grey-text text-darken-1" onClick={()=>{this.props.cancelHandler(false)}}>Cancel</button>
	              <button className="btn waves-effect waves-ligh" onClick={()=>{this.submitForm()}}>Create</button>
	            </div>
	        </div>
		)
	}
}

Form.propTypes = {
  formFields: PropTypes.array.isRequired,
  submitHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired,
  config: PropTypes.object
}

export default Form;