import React from 'react'
import Header from '../UI/Header.js';
import Footer from '../UI/Footer.js'
import Background from '../UI/Background.js';

const TemplatePage = ({ src, type, children }) => {
  return (
    <>
      <Background src={src} type={type}>
        <Header></Header>
        {children}
        <Footer />
      </Background>
    </>
  );
}

export default TemplatePage;