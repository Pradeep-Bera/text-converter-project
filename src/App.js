import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('dark')
  // const [toggleText, setToggleText] = useState('light')
  const [ldText, setldText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleGreenMode = () => {
    if (mode === 'light') {
      setMode('green')
      setldText('Enable Light Mode')
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode has been enabled", "success")
    } else {
      setMode('light')
      // setToggleText('dark')
      setldText('Enable Green Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      // setToggleText('light')
      setldText('Enable Light Mode')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      // setToggleText('dark')
      setldText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")




    }
  }

  return (

    <>
      <Navbar title='TextUtils' content='About' mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} ldText={ldText} />
      <Alert alert={alert} />
      <div className='container my-3' >


        <TextForm showAlert={showAlert} heading='Enter the text to analyze' />
        <About mode={mode} />

      </div>

    </>

  );
}

export default App;
