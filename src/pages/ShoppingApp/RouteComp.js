import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Homepage/HomePage'


const RouteComp = () => {
  return (
    <BrowserRouter>
   

    <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        
        
        
        </Routes></BrowserRouter>

  )
}

export default RouteComp