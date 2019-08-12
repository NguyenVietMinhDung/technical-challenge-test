/* eslint-disable no-alert */
// @flow
import React, { memo, useEffect, useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';
import type { Props } from './types';
import { LOAD_MORE_TXT } from './constants';
import getImages from '../../services/giphy.service';
import Gallery from '../../components/Gallery';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const App = (props: Props) => {
  const { selectedImgUrl, isVisible, toggleModal } = props;
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const fetchImages = (offset) => {
    getImages(offset).then(
      (result) => {
        setData(data.concat(result));
        if (!loadingStatus) {
          setLoadingStatus(true);
        }
      },
      (error) => {
        alert(error);
      },
    );
  };
  const handleClickEvent = () => {
    const offset = data.length - 1;
    fetchImages(offset);
  };
  useEffect(() => {
    fetchImages(0);
  }, []);
  return (
    loadingStatus ? (
      <div styleName="container">
        <Gallery>
          {data.map(item => (
            <Card
              toggleModal={toggleModal}
              {...item}
            />
          ))}
        </Gallery>
        <Button
          btnTxt={LOAD_MORE_TXT}
          handleClickEvent={handleClickEvent}
        />
        <Modal
          selectedImgUrl={selectedImgUrl}
          isVisible={isVisible}
          toggleModal={toggleModal}
        />
      </div>
    ) : null
  );
};

export default memo<Props>(CSSModules(App, styles));
