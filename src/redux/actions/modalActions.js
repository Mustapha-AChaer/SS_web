import { OPEN_MODAL, CLOSE_MODAL } from '../constants.js';

export const open_modal = (modalName, modalData) => ({ type: OPEN_MODAL, modalName, data: modalData });
export const close_modal = (modalName) => ({ type: CLOSE_MODAL, modalName });
