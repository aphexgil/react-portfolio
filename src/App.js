import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import React, { useState } from 'react';

function App() {

  const [ currentPage, setPage ] = useState("About");

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
      </head>
      <Header setPage={setPage} currentPage={currentPage}/>
      <div className="body">
        <Main currentPage={currentPage}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
