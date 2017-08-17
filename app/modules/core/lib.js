import React,{Component} from 'react';
import ReactDOM from 'react-dom';
var MyHoc = function(ComposedComponent){
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
      this.resetForm = this.resetForm.bind(this);
    }
    handleSubmit(data,element){
      this.setState({
        buttonName:'Save',
        disabled:false
      })
      if(!this.state.disabled){
        console.log(data);
        element.reset();
      }

    }
    newForm(){
      this.setState({
        anotherForm:true
      })
    }
    render() {
      return <ComposedComponent {...this.state} {...this.props} handleSubmit={this.handleSubmit}
      newForm={this.newForm} />;
    }
  }
}
export default MyHoc;
