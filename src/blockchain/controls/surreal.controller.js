import celesteStore from 'celeste-framework/dist/store';
import co from 'src/components/celeste/celeste-options';

import surrealABI from 'src/blockchain/abis/surreal.json';

const surreal_controller = () => {
    const contracts = celesteStore.getState().web3Reducer.contracts;
    const ss_contract = contracts.SURREAL;
    const ss_wl_contract = contracts.SURREAL_WHITE_LIST;
    const erc_721_contract = contracts.ERC721;

    const ss_contract_read = contracts.SURREAL_READ;
    const ss_wl_contract_read = contracts.SURREAL_WHITE_LIST_READ;
    const erc_721_contract_read = contracts.ERC721_READ;

    return {
        whiteListed: async address => {
            return await ss_wl_contract.methods.whiteListed(address).call();
        },
        userWhiteMints: async address => {
            return await ss_wl_contract.methods.userWhiteMints(address).call();
        },
        whiteMinted: async () => {
            return await ss_wl_contract_read.methods.whiteMinted().call();
        },
        whiteMint: () => {
            const tx = ss_wl_contract.methods.whiteMint();
            return tx;
        },
        totalSupply: async () => {
            return await ss_contract_read.methods.totalSupply().call();
        },
        mint: () => {
            const tx = ss_contract.methods.mint();
            return tx;
        },
    };
};

export default surreal_controller;
