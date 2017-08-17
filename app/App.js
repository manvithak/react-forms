import React, {Component} from 'react';
import PersonalInformation from './modules/profile/PersonalInformation.js';
import Address from './modules/profile/Address.js';
import EducationDetails from './modules/profile/EducationDetails';
import Experiance from './modules/profile/Experiance';
import {Grid,Row,Col,Tabs,Tab} from 'react-bootstrap/lib';
import './modules/profile/styles.scss'
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">User Information</a>
            </div>
          </div>
        </nav>
        <div className="container">
          <Grid>
            <Row>
              <Tabs defaultActiveKey={1} id="userInfo">
                <Tab eventKey={1} title="Personal Information" >
                  <PersonalInformation />
                </Tab>
                <Tab eventKey={2} title="Address" >
                  <Address />
                </Tab>
                <Tab eventKey={3} title="Education Details" >
                  <h3>Education Details</h3>
                  <EducationDetails />
                </Tab>
                <Tab eventKey={4} title="Experiance" >
                  <h3>Experiance</h3>
                  <Experiance />
                </Tab>
             </Tabs>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}
export default App;
