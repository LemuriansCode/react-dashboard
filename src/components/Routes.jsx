import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Employees from '../pages/Employees'
import Dashboard from '../pages/Dashboard';
import Crop_Density from '../pages/Crop_Density';
import home from '../pages/Home/home';
const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/cropdensity'  component={Crop_Density}/>
        <Route path='/employees'  component={Employees}/>
        <Route path='/logout'  component={home}/>
    </Switch>
  )
}

export default Routes;
