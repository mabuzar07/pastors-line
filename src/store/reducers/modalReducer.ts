import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ModalActionTypes,
  TOGGLE_EVEN,
} from "../actions/modalActions";

interface ModalState {
  modalA: boolean;
  modalB: boolean;
  modalC: boolean;
  even: boolean;
}

const initialState: ModalState = {
  modalA: false,
  modalB: false,
  modalC: false,
  even: false,
};

const modalReducer = (
  state = initialState,
  action: ModalActionTypes
): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, [action.payload.modalName]: true };
    case CLOSE_MODAL:
      return { ...state, [action.payload.modalName]: false };
    case TOGGLE_EVEN:
      return { ...state, even: action.payload.on };
    default:
      return state;
  }
};

export default modalReducer;
