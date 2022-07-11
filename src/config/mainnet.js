const contracts = {
  mint: "0x5499ee597543f528675Dd23DCfF05440dC3b1C6E",
};

const chainId = 1;

const infuraId = "997ec38ed1ff4c818b45a09f14546530";

const scanURL = "https://etherscan.io";

const apiURL = "https://mint-api.zzoopers.xyz";

const provider = "https://mainnet.infura.io/v3/" + infuraId;

const conf = {
  provider,
  chainId,
  apiURL,
  infuraId,
  contracts,
  scanURL,
};

export default conf;
