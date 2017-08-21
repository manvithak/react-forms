import React,{Component} from 'react';
import ReactDOM from 'react-dom';
var HocAddForm = function(AbstractComponent){
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        anotherForm:0
      }
      this.newForm=this.newForm.bind(this);
    }
    newForm(){
      this.setState({
        anotherForm:this.state.anotherForm+1
      })
    }
    render() {
      const anotherForm  = this.state.anotherForm;
      return(
        <div>
          <button className="add-button" onClick={this.newForm}>AddForm</button>
          <AbstractComponent/>
          {Array(anotherForm)
            .fill(null)
            .map((_, i) => (
              <div key={i}>
                <AbstractComponent/>
              </div>
            ))
          }
        </div>
      )
      return <AbstractComponent/>;
    }
  }
}
export default HocAddForm;
