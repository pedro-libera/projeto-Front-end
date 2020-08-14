import React from 'react';
import Routes from './routes';
import Footer from './components/Footer';
import './assets/styles/global.css';

function App() {
  return (
    <div className="App">      
      <div className="content">
        <Routes/>
      </div>      
      <Footer/>
    </div>
  );
}

export default App;
