import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../layouts/site/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../layouts/site/Footer/Footer';

const SiteRoot = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      {isHome ? <Header /> : null}
      <Outlet />  
       <Footer/>
    </>
  );
};

export default SiteRoot;
