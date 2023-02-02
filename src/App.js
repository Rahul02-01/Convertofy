// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [butText, setbutText] = useState("Enable Dark mode")
  const [alert, setAlert] = useState({})
  

  const showAlert = (message, info) => {

    setAlert({
      message: message,
      info: info
    })

    setTimeout(() => {
      setAlert({})
    }, 1000);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbutText("Enable Light mode");
      document.body.style.backgroundColor = '#212529';
      showAlert("dark", "Dark mode enabled!!!");
      document.title = 'Convertofy-dark';
    }
    else {
      setMode('light');
      setbutText("Enable Dark mode");
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Light mode enabled!!!");
      document.title = 'Convertofy-light';
    }
  }

  const toggletitletext = () =>{
    if (document.title === 'Convertofy - Textarea') {
      document.title = 'Convertofy-About';      
    }
    else if (document.title = 'Convertofy-About') {
      document.title = 'Convertofy - Textarea';
    }
  } 

  return (
    <>
      <BrowserRouter>
        <Navbar title="Convertofy" mode={mode} togglemode={togglemode} butText={butText} toggletitletext={toggletitletext} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About mode={mode}/>}></Route>
        </Routes>
        <Routes>
          <Route path='/textarea' element={<TextArea start="Let's get the work done..." mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
        {/* <TextArea start="Let's get the work done..." mode={mode} showAlert={showAlert} />
      <About mode={mode}/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
