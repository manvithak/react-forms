import React, {Component} from 'react';
import PersonalInformation from './modules/profile/PersonalInformation.js';
import Address from './modules/profile/Address.js';
import Experiance from './modules/profile/Experiance';
import EducationDetails from './modules/profile/EducationDetails.js';
import {Grid,Row,Col,Tabs,Tab} from 'react-bootstrap/lib';
import {Link,Switch,HashRouter,Route} from 'react-router-dom';
import './modules/profile/styles.scss'
class App extends Component {
  render() {
    return (
      <div className="page-margin">
        <div className="parent">
          <div className="colLeft">
            <h1>CONTACT</h1>
          </div>
          <HashRouter>
            <div>
              <div className="topnav">
                <Link to={'/'}>Personal Information</Link>
                <Link to={'/path2'}>Address</Link>
                <Link to={'/path3'}>Education Details</Link>
                <Link to={'/path4'}>Experiance</Link>
              </div>
              <Switch>
                <Route component={Address} path="/path2" />
                <Route component={EducationDetails} path="/path3" />
                <Route component={Experiance} path="/path4" />
                <Route component={PersonalInformation} path="/" />
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>
    )
  }
}
export default App;
