import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer flex-center'>
      <p>Designed by me &copy; {year}</p>
    </footer>
  );
};

export default Footer;
