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

export const spiritRelationApi = "https://spirit-api.zzoopers.xyz";

export const animalsMapping = {
  Cheetah: {
    desc1: `
    You have paid great attention to your instincts <br/>
and like to pursue the latest trends.<br/>
As a long-term investor, <br/>
you distinguish trends from fads.
    
    
    `,
    desc2: `
    You are an Insightful NFT Buyer!
    `,
  },
  Rabbit: {
    desc1: `
    You are a freshman in the Web3 world.<br/>
Everything here is thrilling and novel to you.<br/>
Keep learning. Keep exploring.<br/>
Don't be distracted by the doubters 
    `,
    desc2: `You are a Crypto Newbie!`,
  },
  Unicorn: {
    desc1: `
    Web3 world is like a beautiful but challenging jungle.<br/>
Be patient and find out the useful tools <br/>
to help you advance.<br/>
Enjoy your journey.
    `,
    desc2: `You are a Junior Web3 Inhabitant!`,
  },
  Panda: {
    desc1: `
    You are excited about the development of DAOs.<br/>
    It excites you to join an interesting DAO<br/>
     to make it grow big together.<br/>
    Show your Passion and Talents.
    `,
    desc2: `You are a DAO Enthusiast!`,
  },
  Deer: {
    desc1: `
    You have good understanding and rich experience <br/>
in using DeFi products. <br/>
Just always keep in mind that <br/>
risk and reward come side by side. 
    `,
    desc2: `You are a Seasoned DeFi Investor!`,
  },
  Fox: {
    desc1: `
    You seemingly know how to survive in the bear market.<br/>
Think big and act small.<br/>
Keeping your assets safe<br/>
is always the top priority.

    `,
    desc2: `You are a Reliable Crypto Strategist!`,
  },
  Elephant: {
    desc1: `
    You have engaged closely <br/>
    in the tremendous NFT waves in the Web3 world.<br/>
    You have lots of fun and gains from<br/>
    the fast-growing NFT space.
    `,
    desc2: `You are an Epic NFT Collector!`,
  },

  Penguin: {
    desc1: `
    You are keen on shopping for virtual lands.<br/>
    90% of all millionaires become so through owning real estate, a wise man once said.<br/>
    Lots of opportunities in virtual lands await you to check out.
    
    `,
    desc2: `You are a Rich Landlord in the Metaverse!`,
  },
  Tiger: {
    desc1: `
    You are exuberant for the rise of X to Earn.<br/>
    The complex gaming mechanism is a piece of cake for you.<br/>
    Gear up and get ready for<br/>
    new innovation of X to Earn.
    `,
    desc2: `You are an Experienced X to Earn Player!`,
  },
  Monkey: {
    desc1: `
    You are interested in the Layer2 movement.<br/>
    In Math, We Trust.<br/>
    Your long-term contribution may finally <br/>
    blossom up one day.
    
    
    `,
    desc2: `You are a Solid Layer2 Contributor!`,
  },
};

export default {
  spiritApi,
  chainIdMapping,
  socialLinks,
  spiritRelationApi,
  ...envConf,
};
