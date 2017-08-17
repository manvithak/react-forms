import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import MyHoc from '../core/lib.js';
class EducationDetails extends Component{
  render(){
    return(
      <div>
        <Form onSubmit={this.props.handleSubmit} ref="form">
          <fieldset disabled={this.props.disabled}>
            <select className="form-control" name="examType" value="" title="Exam Type">
              <option value="Tenth">Tenth</option>
              <option value="Twelve">Twelve</option>
              <option value="Graduation">Graduation</option>
            </select><br/>
            <Input type="text" name="examBoard" title="Exam Board" value=""/><br/>
            <Input type="text" name="percent" title="Percentage" value=""/><br/>
          </fieldset>
          <button className="btn btn-primary">{this.props.buttonName}</button>
        </Form>
        <br/>
        <button className="btn btn-primary" onClick={this.props.newForm}>Add Form</button>
        <br/>
        {this.props.anotherForm?<Education />:null}
      </div>
    )
  }
}
const Education = MyHoc(EducationDetails);
export default Education;
