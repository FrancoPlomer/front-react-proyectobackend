import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from '../components'
import CartScreen from '../views/CartScreen'
import MarketScreen from '../views/MarketScreen'

const DashboardRoutes = () => {
  const user = localStorage.getItem("userData")

  if(!user) {
    return <Navigate to="/login"/>
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MarketScreen />}/>
        <Route path="/cart" element={<CartScreen />}/>
      </Routes>
    </>
  );
}

export default DashboardRoutes;
