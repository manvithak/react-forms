import React from 'react';
import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

class Input extends React.Component{
  render() {
    const errorMessage = this.props.getErrorMessage();
    return (
      <div >
        <label>
        {this.props.title}
          <input
            type={this.props.type}
            name={this.props.name}
            onChange={(e) => this.props.setValue(e.target.value)}
            value={this.props.getValue()}
          />
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}
Input.defaultProps = {
  type: 'text'
};

export default HOC(Input);
