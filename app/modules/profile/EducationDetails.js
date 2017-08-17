import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import Select from '../common/Select.js';
import MyHoc from '../core/lib.js';
import {isLessThan} from '../common/custom-validations.js';
class EducationDetails extends Component{
  render(){
    return(
      <div>
        <br/>
        <Form onSubmit={this.props.handleSubmit} ref="form">
          <fieldset disabled={this.props.disabled}>
            <Select name="examType" value=""
            options={[
                {title: 'Tenth', value: 'tenth'},
                {title: 'Twelve', value: 'twelve'},
                {title: 'Graduation', value: 'graduation'},
              ]}
            /><br/>
            <Input type="text" name="examBoard" title="Exam Board" value=""/><br/>
            <Input type="number" name="percent" title="Percentage" value=""
            validations="isNumeric,isLessThan:101" validationError="enter valid percent"/><br/>
          </fieldset>
          <button className="btn btn-primary">{this.props.buttonName}</button>
        </Form>
        <br/>
        <button className="btn btn-primary" onClick={this.props.newForm}>Add Form</button>
        {this.props.anotherForm?<Education />:null}
      </div>
    )
  }
}
const Education = MyHoc(EducationDetails);
export default Education;
