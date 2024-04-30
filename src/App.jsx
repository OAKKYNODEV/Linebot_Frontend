import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { AppProvider } from "./component/Context";
import Home from "./component/Main/Home";

import Menu from "./component/Menu";
import Layout from "./component/Layout";
import Pagecart from "./component/Cartorder/page";
import { DataContextProvider } from "./component/Context/ContextProfile";


export default function App() {
  return (
    <BrowserRouter>
    <AppProvider> 
    <DataContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Pagecart />} />
            <Route path="/menu" element={<Menu />} />
            
            
          </Routes>
       </Layout>
    </DataContextProvider>      
    </AppProvider>
  </BrowserRouter>
  );
}
