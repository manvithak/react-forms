import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {NavLink as Link} from 'react-router-dom';
import PersonalInformation from './modules/profile/PersonalInformation.js';
import Address from './modules/profile/Address.js';
import Experiance from './modules/profile/Experiance';
import EducationDetails from './modules/profile/EducationDetails.js';
class Nav extends React.Component{
  render(){
    return(
      <HashRouter>
        <div>
          <div className="topnav">
            <Link to={'/path1'}>Personal Information</Link>
            <Link to={'/path2'}>Address</Link>
            <Link to={'/path3'}>Education Details</Link>
            <Link to={'/path4'}>Experiance</Link>
          </div>
          <Switch>
            <Route component={Address} path="/path2" />
            <Route component={EducationDetails} path="/path3" />
            <Route component={Experiance} path="/path4" />
            <Route component={PersonalInformation} path="/path1" />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
export default Nav;
