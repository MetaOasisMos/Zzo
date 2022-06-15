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
  telegram: "https://t.me/MetaOasisOfcl",
  twitter: "https://twitter.com/MetaOasisDAO",
  medium: "https://medium.com/@MetaOasisDAO",
  mirror: "https://mirror.xyz/0x1dc28C2fFdf88AB85464DE51aec1b98Bd30d506E",
};

export const spiritApi = "https://api.orangeprotocol.io/orange2c/query";

export const animalsMapping = {
  Cheetah: {
    desc1: `You have paid great attention to your individual feeling and like pursuing the latest trend.<br/>As a long-term investor, you distinguish trends from fads.`,
    desc2: `
      You are an Insightful NFT Buyer!
    `,
  },
  Rabbit: {
    desc1: `You are a freshman in the Web3 world. <br/>
    Everything here is thrilling but unfamiliar to you. <br/>
    Keep learning. Keep exploring.<br/>
    Don't be fueled by the noisy voice.`,
    desc2: `You are a Crypto Newbie!`,
  },
  Unicorn: {
    desc1: `Web3 world is like a beautiful but challenging jungle.<br/>
    Have your own pace and<br/>
    find out the useful tools to grow up.<br/>
    Just enjoy your exclusive Metaverse journey.`,
    desc2: `You are a Junior Web3 Inhabitant!`,
  },
  Panda: {
    desc1: `You are excited about the development of DAO governance.<br/>
    It is cool to join the interesting DAO group and make it big together.<br/>
    Show your Peace and Love.`,
    desc2: `You are a DAO Enthusiast!`,
  },
  Deer: {
    desc1: `You have the unique opinion and understanding about investing in DeFi.<br/>
    But don't forget that opportunity and risk are always soul mates.`,
    desc2: `You are a Seasoned DeFi Investor!`,
  },
  Fox: {
    desc1: `You seemingly know how to survive in the bear market.<br/>
    Think big and act small.<br/>
    Keeping your assets safe should always be the top priority.
    `,
    desc2: `You are a Deep-minded Crypto Strategist!`,
  },
  Elephant: {
    desc1: `You witnessed and engaged in the tremendous wave driven by Web3 world.<br/>
    Lots of fun and gains you have achieved from the fast-growing NFT space.`,
    desc2: `You are an Epic NFT Collector!`,
  },

  Penguin: {
    desc1: `You are keen on shopping for virtual lands.<br/>
    Track more. Explore more. <br/>
    Lots of opportunities behind virtual lands await you to check out.`,
    desc2: `You are a Unique Metaverse-rich Landlord!`,
  },
  Tiger: {
    desc1: `You are ignited a lot from the rise of X to Earn.<br/>
    The complex gaming mechanism is piece of cake for you.<br/>
    Gear up and ready for<br/>
     the next amazing innovation of X to Earn.
    `,
    desc2: `You are an Experienced X to Earn Player!`,
  },
  Monkey: {
    desc1: `You are in the Layer2-focused movement. <br/>
    In Math, We Trust.<br/>
    Your long-term contribution may finally blossom up one day.`,
    desc2: `You are a Solid Layer2 Contributor!`,
  },
};

export default {
  spiritApi,
  chainIdMapping,
  socialLinks,
  ...envConf,
};
