let envConf = require(`./${process.env.NETWORK_ENV}`).default;

export const chainIdMapping = {
  1: "ETH Mainnet",
  5: "Goerli",
  42: "KOVAN",
  56: "BSC Mainnet",
  128: "HECO Mainnet",
  97: "BSC Testnet",
};

export const socialLinks = {
  zzopers: "http://zzoopers.xyz/",
  kucoin: "https://www.kucoin.com/",
  official: "https://metaoasis.fun",
  discord: "https://discord.com/invite/metaoasisdao",
  telegram: 'https://t.me/MetaOasisOfcl',
  twitter: "https://twitter.com/MetaOasisDAO",
  medium: "https://medium.com/@MetaOasisDAO",
  mirror: "https://mirror.xyz/0x1dc28C2fFdf88AB85464DE51aec1b98Bd30d506E",
};

export default {
  chainIdMapping,
  socialLinks,
  ...envConf,
};
