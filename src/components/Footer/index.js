import React from 'react';

import './style.scss';
import config from "../../config";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        © Copyright DDS 2021, {' '}
        <a className="link" href={ config.links.policy } target="_blank" rel="noreferrer noopener">
          Privacy policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
