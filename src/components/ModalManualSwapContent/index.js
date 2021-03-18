import React from 'react';
import { useDispatch, } from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import config from '../../config';
import './style.scss';
import { ReactComponent as IconArrowWhite } from "../../assets/icons/arrow-right-white.svg";
import { ReactComponent as IconClose } from "../../assets/icons/close.svg";
import { ReactComponent as IconCopy } from "../../assets/icons/copy.svg";
import { userActions, modalActions, walletActions } from '../../redux/actions';
import { getTokenSymbol } from '../../utils';

function ModalManualSwapContent(props) {
  const {
    receiver = '',
    conractAddressSwap = '',
    asset = config.IS_PRODUCTION ? 'WISH-2D5' : 'WISHTST2',
    assetCopy = config.IS_PRODUCTION ? 'Wish' : 'WISHTST2',
    amount = '',
    memo = '',
    networkFrom = '',
    networkTo = '',
  } = props;

  const dispatch = useDispatch();

  const [copied, setCopied] = React.useState();

  const handleClose = () => dispatch(modalActions.toggleModal({ isOpen:false, text:null }))

  const handleCopy = (key) => {
    setCopied(key)
    setTimeout(() => setCopied(null),1000)
  }

  return(
  <div className="modal-manual-swap">

    <div className="modal-manual-swap-header">
      Manually
    </div>

    <div className="modal-manual-swap-comment">
      <div>
        To swap { amount } { getTokenSymbol(networkFrom).toUpperCase() } tokens to
        <span className="modal-manual-swap-receiver">{' '}{ receiver }{' '}</span>
      </div>
      <div>
        address in { networkTo.split('-').join(' ') } please make the following transaction
      </div>
    </div>

    <div>
      <div className="modal-manual-swap-label">
        Specify Asset
      </div>
      <div className="modal-manual-swap-field">
        <div className="modal-manual-swap-field-content">
          {copied==='asset' ? 'Copied!' : asset}
        </div>
        <CopyToClipboard
        text={assetCopy}
        onCopy={() => handleCopy('asset')}
        >
          <div className="modal-manual-swap-button-copy-container">
            <IconCopy
            className="modal-manual-swap-button-copy"
            />
          </div>
        </CopyToClipboard>
      </div>

      <div className="modal-manual-swap-label">
        Address
      </div>
      <div className="modal-manual-swap-field">
        <div className="modal-manual-swap-field-content">
          {copied==='conractAddressSwap' ? 'Copied!' : conractAddressSwap}
        </div>
        <CopyToClipboard
        text={conractAddressSwap}
        onCopy={() => handleCopy('conractAddressSwap')}
        >
          <div className="modal-manual-swap-button-copy-container">
            <IconCopy
            className="modal-manual-swap-button-copy"
            />
          </div>
        </CopyToClipboard>
      </div>

      <div className="modal-manual-swap-label">
        Amount to send
      </div>
      <div className="modal-manual-swap-field">
        <div className="modal-manual-swap-field-content">
          {copied==='amount' ? 'Copied!' : amount}
        </div>
        <CopyToClipboard
        text={amount}
        onCopy={() => handleCopy('amount')}
        >
          <div className="modal-manual-swap-button-copy-container">
            <IconCopy
            className="modal-manual-swap-button-copy"
            />
          </div>
        </CopyToClipboard>
      </div>

      <div className="modal-manual-swap-label">
        Memo <span className="color-red">(IMPORTANT! MEMO FIELD IS MANDATORY)</span>
      </div>
      <div className="modal-manual-swap-field">
        <div className="modal-manual-swap-field-content">
          {copied==='memo' ? 'Copied!' : memo}
        </div>
        <CopyToClipboard
        text={memo}
        onCopy={() => handleCopy('memo')}
        >
          <div className="modal-manual-swap-button-copy-container">
            <IconCopy
            className="modal-manual-swap-button-copy"
            />
          </div>
        </CopyToClipboard>
      </div>
    </div>

    <div className="modal-manual-swap-button-container">
      <div
      className="button mt20"
      onClick={handleClose}
      >
        <IconArrowWhite className="button-arrow"/>
        Close
      </div>
    </div>
  </div>
  )
}

export default ModalManualSwapContent;
