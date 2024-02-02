import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Footer, Blog, Possibility, Features, Header, WhatREACTOR} from './containers'
import {Cta, Brand, Navbar, LoginSignup } from './components'
import LoginPage from './components/loginSignup/loginPage'
import './App.css' 

function App() {
  return (
    <div className='App'>
     {/* <LoginSignup/> */}
     <LoginPage/>
      {/* <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatREACTOR/>
      <Features/>
      <Possibility/>
      <Cta/>
    <Blog/>
    <Footer/> */}
    </div>
  )
}

export default App
