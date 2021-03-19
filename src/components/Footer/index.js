import React from 'react';

import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        ©{' '}
        <a className="link" href="https://dds.store" target="_blank">
          Dds.store
        </a>
        {' '}2021 – All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
