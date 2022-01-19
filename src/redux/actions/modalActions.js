import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../constants.js';

export const open_modal = (modalName) => ({type: OPEN_MODAL, modalName});
export const close_modal = (modalName) => ({type: CLOSE_MODAL, modalName});