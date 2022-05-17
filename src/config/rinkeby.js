const contracts = {
  mint: '0x4a3d66aee445cb2bf8b21e05f2a638e5bcb903ef'
};

const chainId = 4;

const infuraId = '997ec38ed1ff4c818b45a09f14546530'

const scanURL = "https://rinkeby.etherscan.io"

const provider = "https://rinkeby.infura.io/v3/" + infuraId;

const conf = {
  provider,
  chainId,
  infuraId,
  contracts,
  scanURL,
};

export default conf;
