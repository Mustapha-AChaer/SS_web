import surrealABI from 'src/blockchain/abis/surreal.json';
import erc721ABI from 'src/blockchain/abis/erc721.json';

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
            address: '0xD2bd05896584d5f7109e0A74c81B7833C2C0c621',
            isMultichain: false,
        },
        {
            key: 'SURREAL_WHITE_LIST',
            abi: surrealABI,
            address: '0x0dC89E260f85b40f68B3c4C63F8615e8922A9196',
            isMultichain: false,
        },
        {
            key: 'ERC721',
            abi: erc721ABI,
            address: '0xD2bd05896584d5f7109e0A74c81B7833C2C0c621',
            isMultichain: false,
        },
    ],
    addressBook: {
        SURREAL: '0xD2bd05896584d5f7109e0A74c81B7833C2C0c621',
        SURREAL_WHITE_LIST: '0x0dC89E260f85b40f68B3c4C63F8615e8922A9196',
    },
};

export default celesteOptions;
