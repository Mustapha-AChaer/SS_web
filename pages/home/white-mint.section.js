import { useFormik } from 'formik';
import * as yup from 'yup';

import { useCelesteSelector } from 'celeste-framework';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store as notificationStore } from 'react-notifications-component';
import { infoNotification } from 'src/static/notifications';

import {
    fetch_mints_left,
    fetch_user_white_listed,
    white_mint_tx,
    fetch_total_white_mints,
} from 'src/redux/actions/mintActions';

const MintSection = () => {
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);
    const { mintReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            amount: 0,
        },
        validationSchema: yup.object({
            amount: yup.number().positive().required('Amount is required'),
        }),
        onSubmit: values => {
            const { amount } = values;
            console.log(amount);
            dispatch(white_mint_tx({ amount }));
        },
    });

    const [mintData, setMintData] = useState({
        userIsWhiteListed: false,
        mintsLeft: 0,
    });

    useEffect(() => {
        if (!web3Reducer.initialized || !walletReducer.isLoggedIn) return;

        dispatch(fetch_user_white_listed());
        dispatch(fetch_mints_left());
        dispatch(fetch_total_white_mints());
    }, [web3Reducer, walletReducer, mintReducer.whiteMintTx]);

    useEffect(() => {
        notificationStore.addNotification(infoNotification('Fetching wallet data...'));
    }, []);

    const onIncreaseClick = () => {
        if (!web3Reducer.initialized) return;

        const currentAmount = formik.values.amount;

        if (currentAmount < mintReducer.mintsLeft && currentAmount < 1500 - mintReducer.totalWhiteMints)
            formik.setFieldValue('amount', currentAmount + 1);
    };

    const onDecreaseClick = () => {
        if (!web3Reducer.initialized) return;

        const currentAmount = formik.values.amount;

        if (currentAmount > 0) formik.setFieldValue('amount', currentAmount - 1);
    };

    return (
        <Fragment>
            {mintReducer.userIsWhiteListed ? (
                <Fragment>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="buttons has-text-centered-mobile">
                            <button
                                className="button is-hgra1 has-text-white is-size-5 is-rounded"
                                type="button"
                                onClick={onDecreaseClick}
                                disabled={formik.values.amount == 0}
                            >
                                -
                            </button>

                            <button
                                className={`button is-hgra1 has-text-white is-rounded is-size-5 ${
                                    mintReducer.whiteMintTx.loading ? 'is-loading' : ''
                                }`}
                                type="submit"
                                // disabled={formik.values.amount == 0 || mintReducer.totalWhiteMints >= 1500}
                                disabled
                            >
                                Mint {formik.values.amount}
                            </button>

                            <button
                                className="button is-hgra1 has-text-white is-size-5 is-rounded"
                                type="button"
                                onClick={onIncreaseClick}
                                disabled={formik.values.amount == mintReducer.mintsLeft}
                            >
                                +
                            </button>
                        </div>
                        <h1 className="subtitle is-6 has-text-white mb-1">
                            White Mints Left for this wallet: {mintReducer.mintsLeft}
                        </h1>
                        <h1 className="subtitle is-6 has-text-white">
                            Total White Mints Left: {1500 - mintReducer.totalWhiteMints}
                        </h1>
                    </form>
                </Fragment>
            ) : (
                <h1 className="subtitle is-6 has-text-white has-text-danger">Wallet is not white listed</h1>
            )}
        </Fragment>
    );
};

export default MintSection;
