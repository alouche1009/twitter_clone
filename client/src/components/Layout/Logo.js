import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo"/>;
}
export default Logo;