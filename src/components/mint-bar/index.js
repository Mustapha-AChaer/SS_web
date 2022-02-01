import { useCelesteSelector } from 'celeste-framework';
import { useState, useEffect, Fragment } from 'react';

import surreal_controller from 'src/blockchain/controls/surreal.controller';
import styles from './mintbar.module.scss';

const MintBar = props => {
    const { web3Reducer } = useCelesteSelector(state => state);

    const [totalSupply, setTotalSupply] = useState(0);

    useEffect(() => {
        if (!web3Reducer.initialized) return;

        (async () => {
            const surreal = new surreal_controller();
            const _totalSupply = await surreal.totalSupply();
            setTotalSupply(_totalSupply);
        })();
    }, [web3Reducer]);

    return (
        <Fragment>
            {/*<h1 className="title is-4 has-text-white mb-2">{totalSupply} / 5000</h1>
            <progress className="progress is-info" value={(totalSupply / 5000) * 100} max="100" /> */}
            <h1 className="title is-4 has-text-white mb-2">Hi Genesis Mint: 1000 / 1000</h1>
            <progress className={`progress is-dark`} value={(1000 / 1000) * 100} max="100" />
        </Fragment>
    );
};

export default MintBar;
