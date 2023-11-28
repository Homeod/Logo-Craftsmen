import React from "react";
import { BrowserRouter} from "react-router-dom"
import { Routes, Route } from "react-router-dom"

import {About, Contact, FAQs, Navbar, Portfolio, Hero} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-50">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <Routes>
          <Route path="/faqs" element={ <FAQs/> }/>
          <Route path="/about" element={ <About/> }/>          
        </Routes>
        {/* <FAQs/> */}
        {/* <About/> */}
      </div>
    </BrowserRouter>
  )
}

export default App
