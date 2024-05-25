import React, { Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Navbar = lazy(()=> import('../../../pages/Navbar/Navbar'))
const HomePage = lazy(() => import('../HomePage'))
const Contact = lazy(() => import('../Contact'))
const About = lazy(() => import('../About'))
const Details = lazy(() => import('../Details'))

const RoutesComp = () => {
  return (
   <BrowserRouter>
   <Suspense fallback="<div>loading</div>">
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/details' element={<Details/>} />
   </Routes>
   </Suspense>
   </BrowserRouter>
  )
}

export default RoutesComp