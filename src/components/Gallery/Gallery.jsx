// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Gallery.scss';
import type { Props } from './types';

const Gallery = (props: Props) => {
  const { children } = props;
  return (
    <div styleName="container">
      {children}
    </div>
  );
};

export default memo<Props>(CSSModules(Gallery, styles));
