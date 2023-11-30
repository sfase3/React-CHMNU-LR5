import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/styles.css';
import dialog from '../styles/dialog.module.css'

const Dialog = ({ isOpen, onClose }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <div className={dialog.wrapper}>
        <div className={dialog.nested}>
          <p>This is a dialog window</p>
          <button 
            onClick={onClose} 
          >
            Close
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Dialog;
