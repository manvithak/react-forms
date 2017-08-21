import React, {Component} from 'react';
import Nav from './Nav.js';
import './modules/profile/styles.scss'
class App extends Component {
  render() {
    return (
      <div className="page-margin">
        <div className="parent">
          <div className="colLeft">
            <h1>CONTACT</h1>
          </div>
          <Nav/>
        </div>
      </div>
    )
  }
}
export default App;
