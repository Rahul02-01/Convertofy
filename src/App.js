// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {

  const [mode,setMode] = useState('light')
  const [butText,setbutText] = useState("Enable Dark mode")
  

  const togglemode = () =>{
    if (mode === 'light') {
      setMode('dark');
      setbutText("Enable Light mode");
      document.body.style.backgroundColor = '#212529';
    }
    else{
      setMode('light');
      setbutText("Enable Dark mode");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Convertofy" mode={mode} togglemode={togglemode} butText={butText}/>
      <TextArea start="Let's get the work done..." mode={mode}/>
      <About mode={mode}/>
    </>
  );
}

export default App;
