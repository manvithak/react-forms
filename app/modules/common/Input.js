import React from 'react';
import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

class Input extends React.Component{
  render() {
    const errorMessage = this.props.getErrorMessage();
    return (
      <div >
        <input
          className="form-control"
          type={this.props.type || 'text'}
          name={this.props.name}
          placeholder={this.props.title}
          onChange={(e) => this.props.setValue(e.target.value)}
          value={this.props.getValue()}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default HOC(Input);
