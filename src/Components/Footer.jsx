import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white"> 
      <div className="container text-center">
        <a href="https://github.com/AbhiSurve2412" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="bi bi-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhijitsurve/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="bi bi-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://instagram.com/Abhi_surve2412" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
          <i className="bi bi-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <div className="text-center py-3">
        © 2023 Your Company Name | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
