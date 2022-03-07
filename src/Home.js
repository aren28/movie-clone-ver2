import './App.css';
import React from 'react'
import Nav from './global/components/Nav';
import Header from './global/components/Header';
import Row from "./Modal/Row";

function Home() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Row />
      </div>
    );
  }
  
  export default Home;