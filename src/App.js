import React from 'react'
import './App.css'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import Main from './Components/Main/main'
import Photogallery from './Components/photogallery/photogallery'
import Navbar from './Components/Navbar/navbar'
import Reviews from './Components/Reviews/Reviews'

const App = () => {
  return (
  <>
  <Navbar/>
  <Home/>
  <Main/>
  <Photogallery/>
  <Reviews/>
  <Footer/>
  </>
  )
}

export default App