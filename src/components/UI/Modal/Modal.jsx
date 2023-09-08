import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, active, setActive}) => {

  const rootClsModal = [classes.modal];
  const rootClsContent = [classes.modal__content];

  if (active) {
    rootClsModal.push(classes.active);
    rootClsContent.push(classes.active);
  }
  return (
    <div className={rootClsModal.join(' ')} onClick={() => setActive(false)}>
      <div className={rootClsContent.join(' ')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
