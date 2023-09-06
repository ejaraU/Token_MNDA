import * as dotenv from 'dotenv';

import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';

import { HardhatUserConfig, task } from 'hardhat/config';

dotenv.config();

const config: HardhatUserConfig = {
    solidity: '0.8.4',
    defaultNetwork: 'polygon_mumbai',
    networks: {
      polygon_mainnet: {
        url: process.env.POLYGON_MAINNET_URL || '',
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
      },
      polygon_mumbai: {
        url: process.env.POLYGON_MUMBAI_URL || '',
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
      }
    },
    gasReporter: {
      enabled: process.env.REPORT_GAS !== undefined,
      currency: 'USD'
    },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY
    }
  };
  

export default config;
