import "./ScrollHeader.css"
import React, { useState, useEffect } from 'react';
import Header from './Header';
const ScrollHeader = () => {
    const [headerClass, setHeaderClass] = useState('');
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        setHeaderClass('');
      } else {
        setHeaderClass('hidden');
      }
    };
  
    return (
      <header className={`basic-header ${headerClass}`}>
        <Header/>
      </header>
    );
  };
  
  export default ScrollHeader;
  