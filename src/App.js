import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title="Text-Utils2" about="About-Textutils"/>

    <div className='container my-3'>
        <Textform heading="Enter the text to Analyze"/>
    </div>
    </>
  );
}

export default App;
