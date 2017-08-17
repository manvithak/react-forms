import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import Input from '../common/Input.js';
import MyHoc from '../core/lib.js';

class Address extends Component{
  render(){
    return(
      <div>
        <h3>Address</h3>
        <Form onSubmit={this.props.handleSubmit} ref="form">
          <fieldset disabled={this.props.disabled}>
          <h4>Present Address</h4>
            <Input type="text" name="presentStreet" title="Street" value=""/><br/>
            <Input type="text" name="presentArea" title="Area" value=""/><br/>
            <Input type="text" name="presentCity" title="City" value=""/><br/>
            <Input type="text" name="presentState" title="State" value=""/><br/>
            <Input type="number" name="presentZip" title="Zip" value=""/><br/>
          <div className="form-adjust">
            <h4>Permenent Address</h4>
              <Input type="text" name="permenentStreet" title="Street" value=""/><br/>
              <Input type="text" name="permenentArea" title="Area" value=""/><br/>
              <Input type="text" name="permenentCity" title="City" value=""/><br/>
              <Input type="text" name="permenentState" title="State" value=""/><br/>
              <Input type="number" name="permenentZip" title="Zip" value=""/><br/>
          </div>
          </fieldset>
          <button className="btn btn-default">{this.props.buttonName}</button>
        </Form>
      </div>
    )
  }
}
export default MyHoc(Address);
