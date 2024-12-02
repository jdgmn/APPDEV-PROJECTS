import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pokemon/:pokeIndex" element={<Pokemon />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;