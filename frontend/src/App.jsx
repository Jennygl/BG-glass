// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Glassar from "./pages/RecView"



function App() {

  return (
    <>
    <div className="App">

        <BrowserRouter>

        <Routes>
            <Route path="/glassar" element={<Glassar/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
    </>
  )
}

export default App
