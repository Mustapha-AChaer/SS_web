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
            address: '0x4315295e0c728d5093d2E0eB19208Fcbe3928023',
            isMultichain: false,
        },
    ],
    addressBook: {
        SURREAL: '0x4315295e0c728d5093d2E0eB19208Fcbe3928023',
    },
};

export default celesteOptions;
