import React from 'react';
import Sidebar from '../Sidebar/index.jsx';
import Navbar from '../Navbar/index.jsx';
import Main from '../Main/index.jsx';
import About from './index.jsx';
import Menu from '../Menu/index.jsx';
import Cart from './index.jsx'

export default function Pagecart() {

  
  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {/* Main Section */}
          <div className="container mx-auto p-4">
          <Cart />
          </div>

          {/* About Section */}
          <div className="container mx-auto p-4">
           
          </div>

          {/* Menu Section */}
          <div className="container mx-auto p-4">
            
          </div>
        </main>
      </div>
    </div>
  );
}
