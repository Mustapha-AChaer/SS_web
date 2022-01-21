import surrealABI from 'src/blockchain/abis/surreal.json';

const celesteOptions = {
    rpcs: [
        {
            chainId: 4,
            url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        },
    ],
    smartContracts: [
        {
            key: 'SURREAL',
            abi: surrealABI,
            address: '0x0c423De818c6e83Dd8564CC18A4CC6C7C0B8E455',
            isMultichain: false,
        },
    ],
    addressBook: {
        SURREAL: '0x0c423De818c6e83Dd8564CC18A4CC6C7C0B8E455',
    },
};

export default celesteOptions;
