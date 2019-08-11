import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.scss';
import type { Props } from './types';

const Button = (props: Props) => {
  const { handleClickEvent, btnTxt } = props;
  return (
    <button
      type="button"
      styleName="btn"
      onClick={handleClickEvent}
    >
      {btnTxt}
    </button>
  );
};

export default CSSModules(Button, styles);
