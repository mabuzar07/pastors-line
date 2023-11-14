export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_EVEN = "TOGGLE_EVEN";

export interface OpenModalAction {
  type: typeof OPEN_MODAL;
  payload: {
    modalName: string;
  };
}

export interface CloseModalAction {
  type: typeof CLOSE_MODAL;
  payload: {
    modalName: string;
  };
}

export interface toggleEvenAction {
  type: typeof TOGGLE_EVEN;
  payload: {
    on: boolean;
  };
}

export type ModalActionTypes =
  | OpenModalAction
  | CloseModalAction
  | toggleEvenAction;

export const openModal = (modalName: string): OpenModalAction => ({
  type: OPEN_MODAL,
  payload: { modalName },
});

export const closeModal = (modalName: string): CloseModalAction => ({
  type: CLOSE_MODAL,
  payload: { modalName },
});

export const toggleEven = (on: boolean): toggleEvenAction => ({
  type: TOGGLE_EVEN,
  payload: { on },
});
