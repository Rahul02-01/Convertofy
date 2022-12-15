// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
      <Navbar title="Changer"/>
      <TextArea start="Let's get the work done..."/>
      <About/>
    </>
  );
}

export default App;
