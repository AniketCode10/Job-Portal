// import LandingPage from '@/pages/Landing';
import  Header  from "../components/Header";
import React from 'react'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
  
    <div className="w-[1200px] my-0 mx-auto">
    <div className="grid-background"></div>
    <main className="min-h-screen container">
      <Header />
      <Outlet />
    </main>
    <div className="p-10 text-center bg-gray-800 mt-10">
      Made with 💗 by Aniket Chandivkar
    </div>
  </div>
// 0YMP7Tb7xhxlE3Pd
    
  )
}

export default AppLayout;