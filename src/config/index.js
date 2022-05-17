let envConf = require(`./${process.env.NETWORK_ENV}`).default;

export const chainIdMapping = {
  1: "ETH Mainnet",
  5: "Goerli",
  42: "KOVAN",
  56: "BSC Mainnet",
  128: "HECO Mainnet",
  97: "BSC Testnet",
};

export default {
  chainIdMapping,
  ...envConf,
};
