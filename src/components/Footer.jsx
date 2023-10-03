import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/in/andre-demonteverde/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/linkedin_logo.png" alt="LinkedIn" className="footer-logo" />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://github.com/ademonteverde"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/github_logo.png" alt="GitHub" className="footer-logo" />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://twitter.com/andrecarlo_d"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/x_logo.png" alt="X" className="footer-logo" />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.instagram.com/andrecarlo.d/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/instagram_logo.png" alt="Instagram" className="footer-logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
