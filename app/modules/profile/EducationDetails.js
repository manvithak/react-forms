import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormWrapper from '../common/FormWrapper.js';
import Input from '../common/Input.js';
import Select from '../common/Select.js';
import HocAddForm from '../common/HocAddForm.js';
import {isValidPercent} from '../common/custom-validations.js';
class EducationDetails extends Component{
  render(){
    return(
      <div>
        <Select name={`examType ${this.props.data}`} value="" title="ExamType"
        options={[
            {title: 'Tenth', value: 'tenth'},
            {title: 'Twelve', value: 'twelve'},
            {title: 'Graduation', value: 'graduation'},
          ]}
        />
        <Input type="text" name={`examBoard ${this.props.data}`} title="Exam Board" value=""/>
        <Input type="number" name={`Percentage ${this.props.data}`} title="Percentage" value=""
        validations="isValidPercent" validationError="enter valid percent"/>
      </div>
    )
  }
}
export default HocAddForm(EducationDetails, 'Education Details');
