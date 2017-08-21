import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormWrapper from '../common/FormWrapper.js';
import Input from '../common/Input.js';
import Hoc from '../common/Hoc.js';
import HocAddForm from '../common/HocAddForm.js';

class Experiance extends Component{
  render(){
    return(
      <div className="form-place">
        <h3>Experiance</h3>
        <FormWrapper onSubmit={this.props.handleSubmit}disabled={this.props.disabled}
        buttonName={this.props.buttonName}>
          <Input type="text" name="companyName" title="Company Name" value=""/>
          <Input type="number" name="experiance" title="No.of Years Worked" value=""/>
        </FormWrapper>
      </div>
    )
  }
}
const PersonExperiance=HocAddForm(Hoc(Experiance));
export default PersonExperiance;
