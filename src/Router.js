import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkipNavigation from './components/SkipNavigation/SkipNavigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SellerConversionButton from './components/SellerConversionButton/SellerConversionButton';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <SkipNavigation />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <SellerConversionButton />
    </BrowserRouter>
  );
};

export default Router;
