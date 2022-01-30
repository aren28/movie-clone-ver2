import './App.css';
import React,{useState} from 'react'
import Nav from './global/components/Nav';
import Header from './global/components/Header';
import Row from "./Modal/Row";
function App() {
  return (

    <div className="App">
      <Nav />
      <Header />
      <Row />
    </div>
  );
}

export default App;
