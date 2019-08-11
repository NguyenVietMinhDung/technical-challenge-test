import { TOGGLE_MODAL } from '../actions/types';

const initialState = {
  selectedImgUrl: null,
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        selectedImgUrl: action.payload.selectedImgUrl,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};
