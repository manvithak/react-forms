import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormWrapper from '../common/FormWrapper.js';
import Input from '../common/Input.js';
import Hoc from '../common/Hoc.js';
class PersonalInformation extends Component{
  render(){
    return(
     <div className="form-place">
      <h3>Personal Information</h3>
       <FormWrapper onSubmit={this.props.handleSubmit}
             disabled={this.props.disabled}
             buttonName={this.props.buttonName}>
         <Input type="text" name="firstName" title="FirstName" value=""/>
         <Input type="text" name="lastName" title="LastName" value=""/>
         <Input type="text" name="fatherName" title="Fathers's Name" value=""/>
         <Input type="text" name="motherName" title="Mother's Name" value=""/>
      </FormWrapper>
     </div>
   )
   }
}
export default Hoc(PersonalInformation);
