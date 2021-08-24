import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import Routes from '../Routes';
import {BrowserRouter, Route} from 'react-router-dom'

import TopNav from '../topnav/TopNav';
import './layout.css'
const Layout = () => {
  return (
    <BrowserRouter>
        <Route render={(props) => (
          <div className = 'Layout'>
            <Sidebar {...props}/>
                <div className="layout_content">
                    <TopNav/>
                  <div className="layout_content-main">
                    <Routes/>
                  </div>
                </div>
          </div>
        )}/>
    </BrowserRouter>
  )
}

export default Layout

