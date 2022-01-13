import React from 'react'
import Main from './Main'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Earnings from './Files/Earnings';
import Sales from './Files/Sales';
import Notification from './Files/Notification';
import Profile from './Files/Profile';

function Home() {
    return (
        <div>
    <Router>
        <Routes>
          <Route path="/" element = {<Main/>} />
          <Route path="/earnings" element = {<Earnings/>} />
          <Route path="/sales" element = {<Sales/>} />
          <Route path="/notification" element = {<Notification/>} />
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
    </Router>
        </div>
    )
}

export default Home
