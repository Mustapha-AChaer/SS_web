import { OPEN_MODAL, CLOSE_MODAL } from '../constants.js';

const defaultState = {
    teamModal: { isOpen: false, data: {} },
    currentModal: '',
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                [action.modalName]: { isOpen: true, data: action.data },
                currentModal: action.modalName,
            };

        case CLOSE_MODAL:
            return {
                ...state,
                [action.modalName]: { isOpen: false, data: {} },
                currentModal: '',
            };

        default:
            return { ...state };
    }
};

export default reducer;
