import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // as Router, 

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      document.title(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d4e04';
      showAlert("Dark mode has been enable", "Success")
      // setInterval(() => {
      //   document.title = 'Install ReactApp'
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Clean Your Virus'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'EricApp - Light mode'
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      setInterval(() => {
        document.title = 'Install ReactApp'
      }, 1000);
      setInterval(() => {
        document.title = 'Clean Your Virus'
      }, 1500);
      setInterval(() => {
        document.title = 'EricApp - Light mode'
      }, 2000);
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Navbar title='ReactApplication' aboutText="About Us" /> */}
        {/* <Navbar /> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* <About /> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
