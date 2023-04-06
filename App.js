import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  // For changing the color of body 
  const [color, setColor] = useState('black');

  // Taking input from user
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = color;
    document.body.style.color = isLightColor(color) ? '#000000' : '#ffffff';
  };

  const isLightColor = (colorCode) => {
    const hex = colorCode.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };

  // For Alert Messages
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type 
    })
    
    // Time for alert messages
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
  <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" color={color} handleColorChange={handleColorChange} handleSubmit={handleSubmit}/>
        <Alert alert={alert} />
        <div className="container mt-3">
        <TextForm  showAlert={showAlert} heading="Enter your text to Analyse"  handleColorChange={handleColorChange} handleSubmit={handleSubmit} color={color}/>
        </div>
        <div className="container mt-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter your text to Analyse"  handleColorChange={handleColorChange} handleSubmit={handleSubmit} color={color}/>}> </Route>
          </Routes> */}
        </div>
      {/* </Router> */}

  </>  
  );
}

export default App;
