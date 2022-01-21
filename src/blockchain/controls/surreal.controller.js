import celesteStore from 'celeste-framework/dist/store';
import co from 'src/components/celeste/celeste-options';

import surrealABI from 'src/blockchain/abis/surreal.json';

const surreal_controller = () => {
    const surrealAddress = co.addressBook.SURREAL;

    const contracts = celesteStore.getState().web3Reducer.contracts;
    const contract = contracts.SURREAL;
    const contract_read = contracts.SURREAL_READ;

    return {
        whiteListed: async (address) => {
            return await contract.methods.whiteListed(address).call();
        },
        userWhiteMints: async (address) => {
            return await contract.methods.userWhiteMints(address).call();
        },
        whiteMint: () => {
            const tx = contract.methods.whiteMint();
            return tx;
        },
        totalSupply: async () => {
            return await contract_read.methods.totalSupply().call();
        },
    };
};

export default surreal_controller;
