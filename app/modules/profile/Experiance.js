import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import MyHoc from '../core/lib.js';

class Experiance extends Component{
  render(){
    return(
      <div>
      <br/>
        <Form onSubmit={this.props.handleSubmit} ref="form">
          <fieldset disabled={this.props.disabled}>
            <Input type="text" name="companyName" title="Company Name" value=""/><br/>
            <Input type="text" name="experiance" title="No.of Years Worked" value=""/><br/>
          </fieldset>
          <button className="btn btn-primary">{this.props.buttonName}</button>
        </Form>
        <br/>
        <button className="btn btn-primary" onClick={this.props.newForm}>Add Form</button><br/>
        {this.props.anotherForm?<PersonExperiance />:null}
      </div>
    )
  }
}
const PersonExperiance=MyHoc(Experiance);
export default PersonExperiance;
