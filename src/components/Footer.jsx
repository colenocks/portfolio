import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer flex-center'>
      <p>&copy; {year}</p>
    </footer>
  );
};

export default Footer;
