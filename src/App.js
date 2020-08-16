import React from 'react';
import Routes from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import './assets/styles/global.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
