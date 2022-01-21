import { TX_LOADING, TX_FAILED, TX_SUCCESS, SET_USER_IS_WHITE_LISTED, SET_MINTS_LEFT } from '../constants';
import { store as notificationStore } from 'react-notifications-component';
import { successNotification, errorNotification, infoNotification } from 'src/static/notifications';
import celesteOptions from 'src/components/celeste/celeste-options';
import surreal_controller from 'src/blockchain/controls/surreal.controller';

/* *~~*~~*~~*~~*~~*~~* CONTS DEFINITION *~~*~~*~~*~~*~~*~~* */

/* *~~*~~*~~*~~*~~*~~* TX PLAIN ACTIONS *~~*~~*~~*~~*~~*~~* */
const tx_loading = (txName) => ({ type: TX_LOADING, txName });
const tx_failed = (txName, errorData) => ({ type: TX_FAILED, txName, data: errorData });
const tx_success = (txName, data) => ({ type: TX_SUCCESS, txName, data });

const set_user_is_white_listed = (isWhiteListed) => ({ type: SET_USER_IS_WHITE_LISTED, payload: isWhiteListed });
const set_mints_left = (mintsLeft) => ({ type: SET_MINTS_LEFT, payload: mintsLeft });

/* *~~*~~*~~*~~*~~*~~* TX THUNKER ACTIONS *~~*~~*~~*~~*~~*~~* */
export const white_mint_tx = (txArguments) => {
    return async (dispatch, getState, celesteStore) => {
        dispatch(tx_loading('whiteMintTx'));

        const { web3Reducer, walletReducer } = celesteStore.getState();
        const { web3 } = web3Reducer;

        const { amount } = txArguments;

        const surreal = new surreal_controller();

        const tx = surreal.whiteMint();
        console.log(tx);

        try {
            const res = await tx.send({
                from: walletReducer.address,
                value: web3.utils.toWei((amount * 0.1).toString(), 'ether'),
            });

            console.log(res);

            dispatch(tx_success('whiteMintTx', res));

            notificationStore.addNotification(
                successNotification('Succesful Transaction', `Minted successfully ${amount} tokens!`)
            );
        } catch (error) {
            if (error.message.includes('User denied transaction signature'))
                notificationStore.addNotification(
                    errorNotification('Tx cancelled', 'Transaction was cancelled by user')
                );
            else if (error.message.includes('Transaction has been reverted by the EVM'))
                notificationStore.addNotification(
                    errorNotification('Tx reverted', 'Transaction has been reverted by the EVM')
                );
            else notificationStore.addNotification(errorNotification('Tx failed', error.message));

            dispatch(tx_failed('whiteMintTx', error));
        }
    };
};

export const fetch_user_white_listed = () => {
    return async (dispatch, getState, celesteStore) => {
        const { walletReducer } = celesteStore.getState();

        const surreal = new surreal_controller();
        const userIsWhiteListed = await surreal.whiteListed(walletReducer.address);

        dispatch(set_user_is_white_listed(userIsWhiteListed));
    };
};

export const fetch_mints_left = () => {
    return async (dispatch, getState, celesteStore) => {
        const { walletReducer } = celesteStore.getState();

        const surreal = new surreal_controller();
        const userMintsLeft = await surreal.userWhiteMints(walletReducer.address);

        dispatch(set_mints_left(userMintsLeft));
    };
};
