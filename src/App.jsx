import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Restaurant from './pages/restaurant'
import Order from './pages/order'
import Profile from './pages/profile'
import Header from './components/header'
import Footer from './components/footer'
import SingleCategory from './pages/singleCategory'
import SingleRestaurant from './pages/singleRestaurant'

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

        <Route path='/category/:id' element={ <SingleCategory /> } />
        <Route path='/restaurant/:id' element={ <SingleRestaurant /> } />
      
      </Routes>
      <Footer />
    </>
  )
}

export default App