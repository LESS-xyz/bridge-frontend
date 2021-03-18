import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Modal from "./components/Modal";
import bg from "./assets/images/bg.svg";
import config from "./config";
import { useSelector } from "react-redux";

function App() {
  const { dex } = useSelector(({ wallet }) => wallet);

  const formatTokenLink = (network) => {
    if (!dex) return '';
    const token = dex.tokens.filter((item) => item.network===network)[0];
    return network === 'Binance-Chain' ? 'https://explorer.binance.org/asset/WISH-2D5' :
    config.tokenLinks()[
    network === 'Ethereum' ?
    'ethereum' : network === 'Binance-Smart-Chain' ?
    'binanceSmartChain' : 'binanceChain'
    ] + `/token/${token.token_address}`
  }

  return (
    <div className="App">
      <div className="App-background" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="App-container">
        <Header/>

        <div className="body">

          {/*<div className="info">*/}
          {/*  <h1>*/}
          {/*    Rubik Crosschain Swap*/}
          {/*  </h1>*/}
          {/*  */}
          {/*  <div className="description">*/}
          {/*    <div>*/}
          {/*      WISH token is now available in {' '}*/}
          {/*      <a*/}
          {/*      className="link-underlined"*/}
          {/*      href={ formatTokenLink('Binance-Chain') }*/}
          {/*      target="_blank"*/}
          {/*      >*/}
          {/*        Binance Chain*/}
          {/*      </a>*/}
          {/*      , {' '}*/}
          {/*      <a*/}
          {/*      className="link-underlined"*/}
          {/*      href={ formatTokenLink('Binance-Smart-Chain') }*/}
          {/*      target="_blank"*/}
          {/*      >*/}
          {/*        Binance Smart Chain*/}
          {/*      </a>{' '}*/}
          {/*      and {' '}*/}
          {/*      <a*/}
          {/*      className="link-underlined"*/}
          {/*      href={ formatTokenLink('Ethereum') }*/}
          {/*      target="_blank"*/}
          {/*      >*/}
          {/*        Ethereum*/}
          {/*      </a>.{' '}*/}
          {/*      <div>*/}
          {/*        You can swap WISH token between the blockchains anytime.*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  */}
          {/*  <div className="links">*/}
          {/*    <div className="links-item">*/}
          {/*      <div>*/}
          {/*        Got a problem? Just get in touch.*/}
          {/*      </div>*/}
          {/*      /!*<IconArrowBlue className={ "links-arrow-down" }/>*!/*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>*/}
          {/*        If you have any problems or questions please do not hesitate*/}
          {/*        to contact our support in {' '}*/}
          {/*        <a href={ config.links.telegram } target="_blank" rel="noreferrer noopener">*/}
          {/*          Telegram*/}
          {/*        </a>*/}
          {/*        {' '} or by {' '}*/}
          {/*        <a href={ 'mailto:' + config.links.email } target="_blank" rel="noreferrer noopener">*/}
          {/*          { config.links.email }*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <Form/>

        </div>

        <Footer/>
        <Modal/>

      </div>
    </div>
  );
}

export default App;
