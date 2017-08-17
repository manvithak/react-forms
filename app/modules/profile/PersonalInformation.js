import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import MyHoc from '../core/lib.js';
class PersonalInformation extends Component{
  render(){
    return(
      <div>
        <h3>Personal Information</h3>
        <Form onSubmit={this.props.handleSubmit} ref="form" name="form">
          <fieldset disabled={this.props.disabled}>
            <Input type="text" name="firstName" title="FirstName" value=""/><br/>
            <Input type="text" name="lastName" title="LastName" value=""/><br/>
            <Input type="text" name="fatherName" title="Fathers's Name" value=""/><br/>
            <Input type="text" name="motherName" title="Mother's Name" value=""/><br/>
          </fieldset>
          <button className="btn btn-default">{this.props.buttonName}</button>
        </Form>
      </div>
    )
  }
}

export default MyHoc(PersonalInformation);
