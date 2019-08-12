/* eslint-disable import/prefer-default-export */
import { TOGGLE_MODAL } from './types';

export const toggleModal = selectedImgUrl => ({
  type: TOGGLE_MODAL,
  payload: {
    selectedImgUrl,
  },
});
