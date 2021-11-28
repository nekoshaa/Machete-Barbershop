import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import styles from './App.module.css'
import Navbar from './pages/Navbar/Navbar'
const App = () => {
  return (
    <div>
      {/*  <Navbar /> */}
      <HomePage />
    </div>
  );
}

export default App;
