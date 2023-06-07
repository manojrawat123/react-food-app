import React,{ useState, useEffect } from 'react';
import SideBar from './Navbar/SideBar';
import PrimarySearchAppBar from './Navbar/Topbar';
import MyHome from './Component/Home/Home';
import "./input.css"
import Footer from './Navbar/Fotter';
import { Route, Routes } from 'react-router-dom';
import Mymenu from './Component/menu/Mymenu';
import MyContact from './Component/Contact/Contact';
import MyAbout from './Component/About/About';
import TabExample from './Component/Login/Login';
import MyOrderDetail from './Component/OrderDetail/MyOrderDetail';

function App() { 
return (
    <>
      <PrimarySearchAppBar />
      <SideBar />
      <Routes>
        <Route exact path='/' Component={MyHome}></Route>
        <Route path='/menu' Component={Mymenu}></Route>
        <Route path='/contact' Component={MyContact}></Route>
        <Route path='/about' Component={MyAbout}></Route>
        <Route path='/orderdetail/:id' Component={MyOrderDetail}></Route>
        <Route path='/login' Component={TabExample}></Route>
      </Routes>
      <Footer />
     
    </>
  )
}

export default App
