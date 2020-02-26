require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain soft harvest lock swing tenant'; 
let testAccounts = [
"0xabda6d7caf8ab4235d5d1339d156201bcf6cd686f0a145034e4ec092cecb27cc",
"0xa4a87a8b28f59e574a45e2ed97832592bf662bdb3ff55847d5fa07b7fbe56092",
"0x6d1fa3ef32068a78ffb809b7377d0349e795249ccaf0f23393ed3dca7e09270a",
"0x66c76d4d18318ee57cdb0cda0eea2ff11bbbd25c8c407e5ab9759cbdeb41eab3",
"0x52be87315d7e485bb7f117a8ebd4276507c0c71fbaf8e1c71a768ea4e9f16d2f",
"0x16339d6825b3b66da602d4021bd2d9a70e26aa772d2ca16e1fef39ea5b7d73a7",
"0x8975d2d7d2628354524c8171199ab021baf631efcb704215ca8187dcfdfec838",
"0x3ed84ec4932bf12d2ed091bea11d4d1f7c82df96c9578b85036015490101c3c1",
"0xae14c8791336ffa794382c2d565da1877dbd6aa7a4886cffcfa1601bc389f11c",
"0x888b3518392e11d5ce4e1e0aff183b4fed69d689b7b064dd4e0e6bbff3c1cf5e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
