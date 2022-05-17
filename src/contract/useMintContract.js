import { useContext } from "react";
import config from "../config";
import { Web3Context } from "context/Web3Context";
import useContract from "hooks/useContract";
import CompoundStakingRewardAbi from "./abi/CompoundStakingReward.json";
// import BN from "bignumber.js";

export default function useMintContract() {
  const { account, sendTx } = useContext(Web3Context);
  const contract = useContract(
    CompoundStakingRewardAbi,
    config.contracts.compoundStakingReward
  );

  return {
    async getStartBlock() {
      return await contract.methods.startBlock().call();
    },

    async whitelistMint() {
      const func = contract.methods.whitelistMint("");
      return await sendTx(func, "unstake");
    },
  };
}
