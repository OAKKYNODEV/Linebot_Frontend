import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Main from '../Main';
import About from '../Cartorder/index.jsx';
import Menu from '../Menu';


export default function Home() {
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
          <Menu />
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
