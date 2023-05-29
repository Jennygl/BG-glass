// import { useState } from 'react'
// import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Glassar from "./pages/RecView"
import HomeView from './pages/HomeView'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
            <Route path="/glassar" element={<Glassar/>}/>
            <Route path="/" element={<HomeView/>}/>
        </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
    </>
  )
}

export default App
