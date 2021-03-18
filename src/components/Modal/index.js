import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { modalActions } from "../../redux/actions";
import { ReactComponent as IconClose } from "../../assets/icons/close.svg";

function Modal() {
  const { isOpen, text } = useSelector(({ modal }) => ({
    isOpen: modal.isOpen,
    text: modal.text,
  }))

  const dispatch = useDispatch();

  const ref = React.useRef();

  const handleClose = () => dispatch(modalActions.toggleModal({ isOpen:false, text:null }))

  const handleClickOutside = (e) => {
    if (e.target===ref.current)
    dispatch(modalActions.toggleModal({isOpen:false,text:''}))
  }

  React.useEffect(() => {
    document.addEventListener('click',handleClickOutside)
    return () => document.removeEventListener('click',handleClickOutside)
  },[])

  return (
  <div className={ isOpen ? "modal-open" : "modal-closed" } ref={ ref }>
    <div className="modal-container">
      <div
      className="modal-header"
      >
        <IconClose
        onClick={handleClose}
        className="modal-close"
        />
      </div>
      { text }
    </div>
  </div>
  );
}

export default Modal;
