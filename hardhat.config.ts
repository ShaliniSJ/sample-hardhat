import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
import 'solidity-coverage'

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API = process.env.COINMARKETCAP_API 

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  // lets deploy contract to test net lol
  networks:{
    sepolia:{
      url: SEPOLIA_RPC_URL,
      accounts:[PRIVATE_KEY!],
      chainId:11155111
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337
    },
    ganache:{
      url: GANACHE_RPC_URL,
      accounts:[PRIVATE_KEY!],
      chainId:1337
    },
  },
  gasReporter:{
    enabled: false,
    noColors: true,
    outputFile: "gasReporter.txt",
    currency:"INR",
    coinmarketcap:COINMARKETCAP_API
  }
};

export default config;
