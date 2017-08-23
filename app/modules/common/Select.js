import React from 'react';
import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';
class Select extends React.Component{

  render() {
    const options = this.props.options.map((option, i) => (
      <option key={option.title+option.value} value={option.value}>
        {option.title}
      </option>
    ));
    return (
      <label>
        {this.props.title}
        <select name={this.props.name} onChange={(e) => this.props.setValue(e.target.value)}
        value={this.props.getValue()}>
          {options}
        </select>
      </label>
    );
  }
}

export default HOC(Select);
