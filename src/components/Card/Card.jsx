import React from 'react';
import CSSModules from 'react-css-modules';
import type { Props } from './types';
import styles from './Card.scss';

const Card = (props: Props) => {
  const {
    link, imgUrl, avatarUrl, username, toggleModal,
  } = props;
  const handleClickEvent = imgUrl => () => toggleModal(imgUrl);
  return (
    <div styleName="container">
      <div styleName="card-body">
        <img
          styleName="image"
          src={imgUrl}
          alt=""
          onClick={handleClickEvent(imgUrl)}
        />
        <div styleName="metadata">
          <a styleName="link" href={link}>
            <i className="lni-paperclip size-sm" />
          </a>
        </div>
      </div>
      <div styleName="card-footer">
        {avatarUrl && <img styleName="avatar" src={avatarUrl} alt="" />}
        {username && <span styleName="user">{username}</span>}
      </div>
    </div>
  );
};

export default CSSModules(Card, styles);
