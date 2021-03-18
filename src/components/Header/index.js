import React from 'react';
import useMedia from 'use-media';

import config from '../../config';
import './style.scss';
import { ReactComponent as IconLogo } from '../../assets/images/logo.svg';
import { ReactComponent as IconFacebook } from "../../assets/icons/social/facebook-circle.svg";
import { ReactComponent as IconTelegram } from "../../assets/icons/social/telegram-circle.svg";
import { ReactComponent as IconEmail } from "../../assets/icons/social/email-circle.svg";
import { ReactComponent as IconBitcoin } from "../../assets/icons/social/bitcoin-circle.svg";
import { ReactComponent as IconMedium } from "../../assets/icons/social/medium-circle.svg";
import { ReactComponent as IconTwitter } from "../../assets/icons/social/twitter-circle.svg";
import { ReactComponent as IconGithub } from "../../assets/icons/social/github-circle.svg";
import { ReactComponent as IconDiscord } from "../../assets/icons/social/discord-circle.svg";
import { ReactComponent as IconReddit } from "../../assets/icons/social/reddit-circle.svg";
import HeaderDropdown from "../HeaderDropdown";

function Header() {

  const isMobile = useMedia({maxWidth: 1000});

  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <header className="header">
      <div className="header-container">

        <div className="header-left-group">
          <a href="/">
            <IconLogo className="header-logo"/>
          </a>
        </div>

        {/*{ isMobile &&*/}
        {/*<div*/}
        {/*className="header-menu-btn-wrapper"*/}
        {/*onClick={() => setOpenMenu(!openMenu)}*/}
        {/*>*/}
        {/*  { !openMenu ? 'Menu' : "Close" }*/}
        {/*</div>*/}
        {/*}*/}

        {/*<div*/}
        {/*className={*/}
        {/*  isMobile ?*/}
        {/*  (openMenu ? "header-menu-mobile-open" : "header-menu-mobile-closed") :*/}
        {/*  "header-right-group"*/}
        {/*}*/}
        {/*>*/}
        {/*  <div className="header-item">*/}
        {/*    <a href="https://rubic.finance/">*/}
        {/*      About*/}
        {/*    </a>*/}
        {/*  </div>*/}

        {/*  <div className="header-item">*/}
        {/*    <a href="https://rubic.exchange/team/">*/}
        {/*      Team*/}
        {/*    </a>*/}
        {/*  </div>*/}

        {/*  <div className="header-item">*/}
        {/*    <a href="https://rubic.exchange/about">*/}
        {/*      Features*/}
        {/*    </a>*/}
        {/*  </div>*/}

        {/*  <div className="header-item">*/}
        {/*    <a href="https://rubic.exchange/faq">*/}
        {/*      FAQ*/}
        {/*    </a>*/}
        {/*  </div>*/}

        {/*  <HeaderDropdown*/}
        {/*  round*/}
        {/*  items={ [*/}
        {/*    { key: 'en', text: 'English', link: 'https://mywish.io/platform', image: require('../../assets/icons/en.svg').default },*/}
        {/*  ] }*/}
        {/*  value={ 'en' }*/}
        {/*  />*/}

        {/*  { isMobile &&*/}
        {/*  <div className="header-menu-footer">*/}
        {/*    <div className="header-menu-footer-logo-group">*/}
        {/*      <a href={ config.links.telegram } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconTelegram className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*      <a href={ 'mailto:' + config.links.email } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconEmail className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*      <a href={ config.links.twitter } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconTwitter className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*      <a href={ config.links.github } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconGithub className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*      <a href={ config.links.medium } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconMedium className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*      <a href={ config.links.reddit } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconReddit className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*      <a href={ config.links.discord } target="_blank" rel="noreferrer noopener">*/}
        {/*        <IconDiscord className="header-menu-footer-logo"/>*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*    <div className="header-menu-footer-copyright">*/}
        {/*      © Copyright Rubic 2021, {' '}*/}
        {/*      <a className="link" href={ config.links.policy } target="_blank" rel="noreferrer noopener">*/}
        {/*        Privacy policy*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  }*/}
        {/*</div>*/}

      </div>
    </header>
  );
}

export default Header;
