import React, { useState } from 'react'

import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('dark')
  // const [toggleText, setToggleText] = useState('light')
  const [ldText, setldText] = useState('Enable Dark Mode')


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      // setToggleText('light')
      setldText('Enable Light Mode')
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light')
      // setToggleText('dark')
      setldText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';



    }
  }

  return (
    <>
      <Navbar title='TextUtils' content='About' mode={mode} toggleMode={toggleMode} ldText={ldText} />
      <div className='container my-3' >


        <TextForm heading='Enter the text to analyze' />
        {/* <About /> */}

      </div>

    </>
  );
}

export default App;
