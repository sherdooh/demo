import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import About from "./pages/About";



function App() {
  return (
    <div className="App font-opensans">
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} /> {/*Homepage */}
          <Route index path='/about' element={<About />} /> {/*About*/}
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
