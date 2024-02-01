import React from 'react'

import {Footer, Blog, Possibility, Features, Header, WhatREACTOR} from './containers'
import {Cta, Brand, Navbar, LoginSignup } from './components'
import './App.css' 

function App() {
  return (
    <div className='App'>
     <LoginSignup/>
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
