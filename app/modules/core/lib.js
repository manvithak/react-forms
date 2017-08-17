import React,{Component} from 'react';
import ReactDOM from 'react-dom';
var MyHoc = function(AbstractComponent){
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        buttonName:'Edit',
        disabled:true,
        anotherForm:false
      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.newForm=this.newForm.bind(this);
    }
    handleSubmit(data){
      this.setState({
        buttonName:'Save',
        disabled:false
      })
      if(!this.state.disabled){
        console.log(data);
      }
    }
    newForm(){
      this.setState({
        anotherForm:true
      })
    }
    render() {
      return <AbstractComponent {...this.state} handleSubmit={this.handleSubmit}
      newForm={this.newForm} />;
    }
  }
}
export default MyHoc;
