const contracts = {
  tokenDistributor: "0x0Fa81edd01Be9D1C6FAe22858D90e562DB2128FB",
  compoundStakingReward: "0xE9eB434a4EeCAC62717fdB9E7023233d88fa7587",
};

const tokens = {
  state: {
    address: "0xBD8965f84805bB0156272E0bf330332E07666C5d",
    decimals: 18,
  }
};

const chainId = 1;

const infuraId = "997ec38ed1ff4c818b45a09f14546530";

const scanURL = "https://etherscan.io";

const provider =
  "https://mainnet.infura.io/v3/" + infuraId;

const conf = {
  provider,
  chainId,
  infuraId,
  contracts,
  tokens,
  scanURL,
};

export default conf;
