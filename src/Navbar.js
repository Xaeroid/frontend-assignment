import React from 'react'
import { useState } from 'react';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
import  Dashboard  from './Files/Instructor';
import Courses from './Files/Courses';
import Quizes from './Files/Quizes';

function Navbar() {
    const [showNav, setShowNav] = useState(false);
   
    return (
    <>
    <Router>
    <div className='navbar'>
    <div className='spliticon'>
    <HorizontalSplitIcon onClick={() => setShowNav(!showNav)} />
    </div>
        <a href = "/earnings" className='flexbox-item'>Earnings</a>
        <a href = "/sales" className='flexbox-item'>Sales</a>
        <div className='search'>
            <input type="text" placeholder='Search'></input> 
        </div>
        <a href = "/notification" className='flexbox-item'><NotificationsIcon /></a>
        <a href = "/profile" className='flexbox-item'><AccountCircleIcon /></a>
    </div>
    <Sidebar show={showNav} />
        <div className='sidedata'>
        <Routes>
            <Route path = "/dashboard" element = {<Dashboard />} />
            <Route path = "/courses" element = {<Courses />} />
            <Route path = "/quizes" element = {<Quizes />} />
        </Routes>
        </div>
    </Router>
    </>    
    )
}

export default Navbar;
