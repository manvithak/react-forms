import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormWrapper from '../common/FormWrapper.js';
import Input from '../common/Input.js';
import Select from '../common/Select.js';
import Hoc from '../common/Hoc.js';
import HocAddForm from '../common/HocAddForm.js';
import {isLessThan,isMoreThan} from '../common/custom-validations.js';
class EducationDetails extends Component{
  render(){
    return(
      <div className="form-place">
        <h3>Educational Details</h3>
        <FormWrapper onSubmit={this.props.handleSubmit} disabled={this.props.disabled}
        buttonName={this.props.buttonName}>
          <Select name="examType" value="" title="ExamType"
          options={[
              {title: 'Tenth', value: 'tenth'},
              {title: 'Twelve', value: 'twelve'},
              {title: 'Graduation', value: 'graduation'},
            ]}
          />
          <Input type="text" name="examBoard" title="Exam Board" value=""/>
          <Input type="number" name="percent" title="Percentage" value=""
          validations="isMoreThan:0,isLessThan:100" validationError="enter valid percent"/>
        </FormWrapper>
      </div>
    )
  }
}
const Education = HocAddForm(Hoc(EducationDetails));
export default Education;
