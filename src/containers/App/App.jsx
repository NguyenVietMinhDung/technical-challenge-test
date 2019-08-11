import React, { useEffect, useState } from 'react';
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
  const handleClickEvent = () => {
    const offset = data.length - 1;
    getImages(offset).then(
      (result) => {
        setData(data.concat(result));
      },
      (error) => {
        alert(error);
      },
    );
  };
  useEffect(() => {
    getImages(0).then(
      (result) => {
        setData(result);
      },
      (error) => {
        alert(error);
      },
    );
  }, []);
  return (
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
  );
};

export default CSSModules(App, styles);
