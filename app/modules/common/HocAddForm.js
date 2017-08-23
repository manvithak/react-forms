import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'formsy-react';
import FormWrapper from './FormWrapper.js';
var HocAddForm = function(AbstractComponent,title){
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        anotherForm:1,
        buttonName:'Edit',
        disabled:true
      }
      this.newForm=this.newForm.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    newForm(){
      this.setState({
        anotherForm:this.state.anotherForm+1
      })
    }
    handleSubmit(data){
      this.setState({
        disabled:false,
        buttonName:'Save'
      })
      if(!this.state.disabled){
        console.log(data);
        this.setState({
          disabled:true,
          buttonName:'Edit'
        })
      }
    }
    displayForm(){
       let forms=[];
       for(let i=1; i<=this.state.anotherForm; i++){
         forms.push(
         <div key={i}>
           <AbstractComponent data={i} />
         </div>
       )
      }
       return forms || null;
    }
    render() {
      const heading=title;
        if(title){
        return(
          <div>
            <button id="add-button" onClick={this.newForm}>AddForm</button>
            <div className="form-place">
              <h3>{heading}</h3>
              <FormWrapper onSubmit={this.handleSubmit} disabled={this.state.disabled}
               buttonName={this.state.buttonName}>
                  {this.displayForm()}
              </FormWrapper>
            </div>
          </div>
        )
        }
        else{
          return <AbstractComponent {...this.state} handleSubmit={this.handleSubmit}/>;
        }
    }
  }
}

export default HocAddForm;
