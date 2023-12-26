import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Main from './components/Main/Main';
import NavLink from './components/NavLink/NavLink';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Line/>
        <NavLink/>
        <Line/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
