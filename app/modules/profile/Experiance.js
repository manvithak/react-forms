import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import MyHoc from '../core/lib.js';

class Experiance extends Component{
  resetForm = () => {
    this.refs.form.reset();
  }
  render(){
    return(
      <div>
        <br/>
        <div className="form-place">
          <Form onSubmit={(data) => {this.props.handleSubmit(data, this.resetForm)}} ref="form">
            <fieldset disabled={this.props.disabled}>
              <Input type="text" name="companyName" title="Company Name" value=""/><br/>
              <Input type="text" name="experiance" title="No.of Years Worked" value=""/><br/>
            </fieldset>
            <button className="btn btn-default">{this.props.buttonName}</button>
          </Form>
          <br/>
          <button className="btn btn-default" onClick={this.props.newForm}>Add Form</button><br/>
        </div>
        {this.props.anotherForm?<PersonExperiance />:null}
      </div>
    )
  }
}
const PersonExperiance=MyHoc(Experiance);
export default PersonExperiance;
