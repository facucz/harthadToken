require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = process.env.INFURA_API_KEY;

// Replace this private key with your Sepolia account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHER_SCAN_API_KEY,
  },
};