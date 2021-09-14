require('chai/register-should');

const solcStable = {
  version: '0.7.0',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

const solcNightly = {
  version: 'nightly',
  docker: true,
};

const useSolcNightly = process.env.SOLC_NIGHTLY === 'true';
const HDWalletProvider = require('@truffle/hdwallet-provider');
// const fs = require('fs');
const mnemonic = "phone dial opera begin lab output bread palace scale antique cry subway";//fs.readFileSync(".secret").toString().trim();


module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    ropsten: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/96923164b16b4677bf3092288a907056`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet

    },
    rinkeby: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/96923164b16b4677bf3092288a907056`),
      network_id: 4,       // 's id
      gas: 5500000,        //  has a lower block limit than mainnet

    },
  },
  compilers: {
    solc: useSolcNightly ? solcNightly : solcStable,
  },
  plugins: ['solidity-coverage'],
};
