const contracts = {
  mint: '0x36755850E92c98B6b020a9aBEBEeaBb52c48E9ce',
};

const chainId = 4;

const infuraId = '997ec38ed1ff4c818b45a09f14546530'

const scanURL = "https://rinkeby.etherscan.io"

const apiURL = "https://mint-api.zzoopers.xyz";

const provider = "https://rinkeby.infura.io/v3/" + infuraId;

const conf = {
  provider,
  chainId,
  apiURL,
  infuraId,
  contracts,
  scanURL,
};

export default conf;
