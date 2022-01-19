import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../constants.js';

const defaultState = {
    teamMemberModal: {isOpen: false},
    glassPanel: {isOpen: true}
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case OPEN_MODAL:
            return{
                ...state,
                [action.modalName]: {
                    isOpen: true
                },
                glassPanel: {
                    isOpen: true
                }
            };

        case CLOSE_MODAL:
            return{
                ...state,
                [action.modalName]: {
                    isOpen: false
                },
                glassPanel: {
                    isOpen: false
                }
            };

        default:
            return {...state};
    }
}

export default reducer;