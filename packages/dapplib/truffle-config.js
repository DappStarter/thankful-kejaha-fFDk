require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember hole heavy area blue gas'; 
let testAccounts = [
"0x47c6847cf1af2979fa9ab821a22bca9a0db52f583550465884c4d2a1a2c42a12",
"0x719621aa186564fa96fddeac578fefd4c392a9e9379717c8d1ac647330efcbf6",
"0x4774c68f16909ffce276c4303df1700546b915173b2dd2d2f3be099b52064869",
"0x99b764d30341da2cc25a55459a8fee3c8eb2dda53fd8cf4450c9e9bcbc4ddf6b",
"0x45de83f4ab9f25f7d8c29533e664da1884fd8e40e7ffb92a00b12164a259dd91",
"0xd81eaf3c523488380e702aeb85a8b3ab982744b1de60c82ff4357c2c2026c8bf",
"0x89ef794103e15fb2f7b39d5b24d9352a8a6671b2be89733d9805f614ba9a863b",
"0x320406847c02a0911f8bba6f7810b187ec9eb5be6d561e30e8b7f28568fadac7",
"0xcda62bf5ac97cadf45437d418c239937d9042f84ebf8d8be34f3223150fc68b4",
"0x9895b99a7e879b9ba0dc6cc0914113202c051686d377990aabae5e1630759948"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


