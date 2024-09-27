import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Kisses from './pages/Kisses';
import Message from './pages/message';
import Navbar from './components/Navbar';
import './global.css';

// import FloatingEmojis from './components/AnimatedComponents/FloatingEmojis';
// import FloatingEmojiWithHearts from './components/AnimatedComponents/floatingEmojiWithHearts';
function App() {
  return (
    <Router class=" bg-black">
      {/* <div className='flex flex-row'> */}
        <Navbar/>
        {/* <FloatingEmojis/> */}
        {/* Render FloatingEmojis globally */}
        {/* <FloatingHearts/> */}
        {/* <div flex></div> */}
        {/* <FloatingEmojiWithHearts/> */}
        
        
        
        {/* Main Content Area 
        class="translucent-div"
        */}
        <div className='z-10  '>
          <Routes>
            {/* Dashboard Route */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Kisses Route */}
            <Route path="/kisses" element={<Kisses />} />

            {/* Message Route */}
            <Route path="/message" element={<Message />} />

            {/* Default Route */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;




