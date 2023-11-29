import React from 'react';
import { Outlet } from 'react-router';
import './Index.css'
import Footer from './layout/Footer';
import Header from './layout/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-5">
      <Outlet />
      </main>
      
      <Footer/>
      </>
  )
}

export default App