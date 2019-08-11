import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Modal.scss';
import type { Props } from './types';

const Modal = (props: Props) => {
  const { selectedImgUrl, isVisible, toggleModal } = props;
  const handleClickEvent = () => toggleModal(null);
  return (
    isVisible ? (
      <>
        <div
          styleName="black-mask"
          onClick={handleClickEvent}
        />
        <div styleName="container">
          <img
            styleName="modal-body"
            src={selectedImgUrl}
            alt=""
          />
        </div>
      </>
    ) : null
  );
};

export default CSSModules(Modal, styles);