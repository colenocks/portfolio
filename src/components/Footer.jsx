import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer vertically-center">
      <p>Designed by Cole | Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;