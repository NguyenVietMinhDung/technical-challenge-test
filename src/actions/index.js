import { TOGGLE_MODAL } from './types';

export const toggleModal = selectedImgUrl => ({
  type: TOGGLE_MODAL,
  payload: {
    selectedImgUrl,
  },
});
