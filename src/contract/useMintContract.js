import { useContext } from "react";
import config from "../config";
import { Web3Context } from "../context/Web3Context";
import useContract from "../hooks/useContract";
import MintAbi from "./abi/Mint.json";
// import BN from "bignumber.js";

export default function useMintContract() {
  const { sendTx } = useContext(Web3Context);
  const contract = useContract(MintAbi, config.contracts.compoundStakingReward);

  return {
    async getStartBlock() {
      return await contract.methods.startBlock().call();
    },

    async whitelistMint(payAmount, merkleTree, amount) {
      const func = contract.methods.whitelistMint(
        payAmount,
        merkleTree,
        amount
      );
      return await sendTx(func, "mint", payAmount);
    },
  };
}
