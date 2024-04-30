// ContextProfile.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import liff from '@line/liff';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const initializeLine = async () => {
      await liff.init({ liffId: '2003038264-G4AlrEN5' });
      if (!liff.isLoggedIn()) {
        liff.login();
        return false;
      }
      const profile = await liff.getProfile();
      setUserInfo(profile);
      
    };

    initializeLine();
  }, []);

  return (
    <DataContext.Provider value={{ userInfo }}>
      {children}
    </DataContext.Provider>
  );
};
