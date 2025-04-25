import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Restaurant from './pages/restaurant'
import Order from './pages/order'
import Profile from './pages/profile'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Header />
      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/categories" element={ <Category /> } />
        <Route path="/restaurants" element={ <Restaurant /> } />
        <Route path="/order" element={ <Order /> } />
        <Route path="/profile" element={ <Profile /> } />
      
      </Routes>
      <Footer />
    </>
  )
}

export default App