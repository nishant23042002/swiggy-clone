import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './utils/appStore'


function App() {

  return (
    <>
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  )
}

export default App
