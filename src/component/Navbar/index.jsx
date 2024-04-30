import React, { useState, useEffect,useContext } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import liff from '@line/liff';
import { DataContext } from '../Context/ContextProfile';


export default function Navbar() {
  const { userInfo } = useContext(DataContext);
  console.log(userInfo)
  const navStyle = {
    backgroundColor: '#9F825B ',
  };

  return (
    <div className="navbar text-[#ffff]" style={navStyle}>
      <div className="flex-1">
        <Link to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-40 h-30 wr-2" />
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <h1 className="font-bold text-black px-1">{`สวัสดีคุณ ${userInfo ? userInfo.displayName : 'ลูกค้า'}`}</h1>
        <ul className="px-1">
          <li>
            <div className="avatar">
              <div className="w-12 rounded">
                <img src={userInfo ? userInfo.pictureUrl : 'default-avatar-url'} alt="Avatar" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
