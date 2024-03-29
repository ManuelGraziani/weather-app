import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import WeatherResults from './pages/WeatherResults'
import ErrorPage from './pages/ErrorPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/results/:id' element={<WeatherResults />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
