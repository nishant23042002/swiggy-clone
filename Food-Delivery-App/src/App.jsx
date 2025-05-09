import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default App
