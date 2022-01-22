import surrealABI from 'src/blockchain/abis/surreal.json';
import erc721ABI from 'src/blockchain/abis/erc721.json';

const celesteOptions = {
    rpcs: [
        {
            chainId: 1,
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
        {
            key: 'SURREAL_WHITE_LIST',
            abi: surrealABI,
            address: '0x14051EC2Ee535Befe7C9F94f5036A796BD410A7A',
            isMultichain: false,
        },
        {
            key: 'ERC721',
            abi: erc721ABI,
            address: '0x0c423De818c6e83Dd8564CC18A4CC6C7C0B8E455',
            isMultichain: false,
        },
    ],
    addressBook: {
        SURREAL: '0x0c423De818c6e83Dd8564CC18A4CC6C7C0B8E455',
        SURREAL_WHITE_LIST: '0x14051EC2Ee535Befe7C9F94f5036A796BD410A7A',
    },
};

export default celesteOptions;
