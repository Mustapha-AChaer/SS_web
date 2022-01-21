import celesteStore from 'celeste-framework/dist/store';
import co from 'src/components/celeste/celeste-options';

const surreal_controller = () => {
    const contracts = celesteStore.getState().web3Reducer.contracts;
    const contract = contracts.SURREAL;

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
            return await contract.methods.totalSupply().call();
        },
    };
};

export default surreal_controller;
