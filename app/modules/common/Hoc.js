import React,{Component} from 'react';
import ReactDOM from 'react-dom';
var Hoc = function(AbstractComponent){
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        buttonName:'Edit',
        disabled:true
      }
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(data){
      this.setState({
        buttonName:'Save',
        disabled:false
      })
      if(!this.state.disabled){
        console.log(data);
        this.setState({
          buttonName:'Edit',
          disabled:true
        })
      }
    }
    render() {
      return <AbstractComponent {...this.state} handleSubmit={this.handleSubmit}/>;
    }
  }
}
export default Hoc;
