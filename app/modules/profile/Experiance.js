import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormWrapper from '../common/FormWrapper.js';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import HocAddForm from '../common/HocAddForm.js';

class Experiance extends Component{
  render(){
    return(
      <div>
        <Input type="text" name={`company ${this.props.data}`} title="Company Name" value=""/>
        <Input type="number" name={`experiance ${this.props.data}`} title="No.of Years Worked" value=""/>
      </div>
    )
  }
}
export default HocAddForm(Experiance,'Experiance');
