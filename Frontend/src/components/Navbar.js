/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import logo from '../assests/logo.png'

export default function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" style={{marginLeft: "20%"}}/>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav" style={{margin:"20px"}}>
          <a href="/" style={{color:"black",fontSize:"18px"}}>Home</a>
          <a href="/" style={{color:"black",fontSize:"18px"}}>Learn</a>
          <a href="/" style={{color:"black",fontSize:"18px"}}>Company</a>
          <a href="/signin" style={{color:"black",fontSize:"18px"}}>Signin</a>
          <button><a href="/signup" style={{color:"black",fontSize:"18px"}}>Signup</a></button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🏠
      </button>
    </header>
  );
}