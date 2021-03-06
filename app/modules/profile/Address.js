import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormWrapper from '../common/FormWrapper.js';
import Input from '../common/Input.js';
import HocAddForm from '../common/HocAddForm.js';

class Address extends Component{
  render(){
    return(
      <div>
        <div className="form-parent">
        <h3 id="align-middle">Address</h3>
        <FormWrapper onSubmit={this.props.handleSubmit} disabled={this.props.disabled}
        buttonName={this.props.buttonName}>
            <div className="form-left">
              <h4>Present Address</h4>
              <Input type="text" name="presentStreet" title="Street" value=""/>
              <Input type="text" name="presentArea" title="Area" value=""/>
              <Input type="text" name="presentCity" title="City" value=""/>
              <Input type="text" name="presentState" title="State" value=""/>
              <Input type="number" name="presentZip" title="Zip" value=""/>
            </div>
            <div className="form-right">
              <h4>Permenent Address</h4>
              <Input type="text" name="permenentStreet" title="Street" value=""/>
              <Input type="text" name="permenentArea" title="Area" value=""/>
              <Input type="text" name="permenentCity" title="City" value=""/>
              <Input type="text" name="permenentState" title="State" value=""/>
              <Input type="number" name="permenentZip" title="Zip" value=""/>
            </div>
          </FormWrapper>
          </div>
      </div>
    )
  }
}
export default HocAddForm(Address);
