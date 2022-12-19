// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {

  const [mode,setMode] = useState('light')
  const [butText,setbutText] = useState("Enable Dark mode")
  const [alert,setAlert] = useState({})

  const showAlert = (message,info) =>{

    setAlert({
      message : message,
      info : info
    })

    setTimeout(() => {
      setAlert({})
    }, 1000);

  }
  
  const togglemode = () =>{
    if (mode === 'light') {
      setMode('dark');
      setbutText("Enable Light mode");
      document.body.style.backgroundColor = '#212529';
      showAlert("dark","Dark mode enabled!!!")
    }
    else{
      setMode('light');
      setbutText("Enable Dark mode");
      document.body.style.backgroundColor = 'white';
      showAlert("success","Light mode enabled!!!")
    }
  }

  return (
    <>
      <Navbar title="Convertofy" mode={mode} togglemode={togglemode} butText={butText} />
      <Alert alert={alert}/>
      <TextArea start="Let's get the work done..." mode={mode} showAlert={showAlert} />
      <About mode={mode}/>
    </>
  );
}

export default App;
