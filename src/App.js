//library import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS Import
import './App.css';

//page import
import Home from './pages/Home.js'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
