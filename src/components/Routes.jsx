import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard';
import Crop_Density from '../pages/Crop_Density';
const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/cropdensity'  component={Crop_Density}/>
    </Switch>
  )
}

export default Routes
