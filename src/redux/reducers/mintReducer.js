import {
    TX_LOADING,
    TX_FAILED,
    TX_SUCCESS,
    SET_USER_IS_WHITE_LISTED,
    SET_MINTS_LEFT,
    SET_TOTAL_WHITE_MINTS,
} from '../constants';

const generic_tx = {
    loading: false,
    error: false,
    success: false,
    data: null,
};

const defaultState = {
    whiteMintTx: { ...generic_tx },
    userIsWhiteListed: false,
    mintsLeft: 0,
    totalWhiteMints: 0,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TX_LOADING:
            return {
                ...state,
                [action.txName]: {
                    loading: true,
                },
            };

        case TX_FAILED:
            return {
                ...state,
                [action.txName]: {
                    error: true,
                    data: action.data,
                },
            };

        case TX_SUCCESS:
            return {
                ...state,
                [action.txName]: {
                    success: true,
                    data: action.data,
                },
            };

        case SET_USER_IS_WHITE_LISTED:
            return {
                ...state,
                userIsWhiteListed: action.payload,
            };

        case SET_MINTS_LEFT:
            return {
                ...state,
                mintsLeft: 10 - action.payload,
            };

        case SET_TOTAL_WHITE_MINTS:
            return {
                ...state,
                totalWhiteMints: action.payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
