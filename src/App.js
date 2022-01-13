import './App.css';
import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
  return (
    <>
    <div className='home'>
    <Navbar />
    <Home />  
    </div>
    </>
  );
}

export default App;
