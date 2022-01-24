import { useFormik } from 'formik';
import * as yup from 'yup';

import { useCelesteSelector } from 'celeste-framework';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store as notificationStore } from 'react-notifications-component';
import { infoNotification } from 'src/static/notifications';

import surreal_controller from 'src/blockchain/controls/surreal.controller';

import { mint_tx } from 'src/redux/actions/mintActions';

const MintSection = () => {
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);
    const { mintReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    const [totalSupply, setTotalSupply] = useState(0);

    const formik = useFormik({
        initialValues: {
            amount: 0,
        },
        validationSchema: yup.object({
            amount: yup.number().positive().required('Amount is required'),
        }),
        onSubmit: values => {
            const { amount } = values;
            dispatch(mint_tx({ amount }));
        },
    });

    useEffect(() => {
        if (!web3Reducer.initialized) return;

        (async () => {
            const surreal = new surreal_controller();

            const _totalSupply = await surreal.totalSupply();
            setTotalSupply(_totalSupply);
        })();
    }, [web3Reducer]);

    const onIncreaseClick = () => {
        if (!web3Reducer.initialized) return;

        const currentAmount = formik.values.amount;

        if (totalSupply < 5000) formik.setFieldValue('amount', currentAmount + 1);
    };

    const onDecreaseClick = () => {
        if (!web3Reducer.initialized) return;

        const currentAmount = formik.values.amount;

        if (currentAmount > 0) formik.setFieldValue('amount', currentAmount - 1);
    };

    return (
        <Fragment>
            <form onSubmit={formik.handleSubmit}>
                <h1 className="is-3 has-text-weight-bold pl-1 mb-3" style={{ color: '#41fa4a' }}>
                    Public Mint
                </h1>
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
                            mintReducer.mintTx.loading ? 'is-loading' : ''
                        }`}
                        type="submit"
                        disabled={formik.values.amount == 0}
                    >
                        Mint {formik.values.amount}
                    </button>

                    <button
                        className="button is-hgra1 has-text-white is-size-5 is-rounded"
                        type="button"
                        onClick={onIncreaseClick}
                    >
                        +
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default MintSection;
