import React, { useState, createContext, useCallback, useEffect } from "react";
import Web3 from "web3";
import { toast } from "react-toastify";
import config from "../config";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";

const web3Modal = new Web3Modal({
  cacheProvider: true,
  // theme: "dark",
  providerOptions: {
    bitkeep: {
      package: true
    },
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId: config.infuraId,
      },
    },
  },
});

const actionMapping = {
  mint: ["Minting", "Minted", "Failed to mint"],
  default: [
    "Transaction being processed",
    "Transaction Success",
    "Transaction Failed",
  ],
};

const getAction = (actionType = "default", result) => {
  return actionMapping[actionType][result];
};

export const Web3Context = createContext({
  web3: null,
  chainId: null,
  networkId: null,
  blockNumber: null,
  account: null,
  connectWallet: async () => {},
  resetWallet: async () => {},
  estimateGas: async () => {},
  sendTx: async () => {},
});

export const Web3ContextProvider = ({ children }) => {
  const [web3, setWeb3] = useState("");
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [networkId, setnetworkId] = useState("");
  const [blockNumber, setBlockNumber] = useState("");

  const listenProvider = (provider) => {
    provider.on("close", () => {
      resetWallet();
    });
    provider.on("accountsChanged", async (accounts) => {
      setAccount(accounts[0]);
    });
    provider.on("chainChanged", (chainId) => {
      setChainId(parseInt(chainId, 16));
    });
  };

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal.connect();

      await provider.enable();

      const web3Raw = new Web3(provider);
      setWeb3(web3Raw);

      // get account, use this variable to detech if user is connected
      const accounts = await provider.request({
        method: 'eth_requestAccounts'
      })
      setAccount(accounts[0]);

      // get network id
      setnetworkId(await web3Raw.eth.net.getId());

      // get chain id
      setChainId(await web3Raw.eth.getChainId());

      // init block number
      setBlockNumber(await web3Raw.eth.getBlockNumber());

      listenProvider(provider);
    } catch (error) {
      // console.log('set to project provided web3', config.provider)
      setWeb3(new Web3(config.provider));
      console.log(error);
    }
  }, []);

  const resetWallet = useCallback(async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    setAccount("");
    await web3Modal.clearCachedProvider();
  }, []);

  const estimateGas = async (func, value = 0) => {
    try {
      const gas = await func.estimateGas({
        from: account,
        value,
      });
      return Math.floor(gas * 1.2);
    } catch (error) {
      console.log("errr", error.message);
      const objStartIndex = error.message.indexOf("{");
      toast.error(error.message.slice(0, objStartIndex));
      // toast.error(error.message);
    }
  };

  const goScan = (txnHash) => {
    window.open(`${config.scanURL}/tx/${txnHash}`);
  };

  /**
   *
   * @param {*} func , required
   * @param {*} actionType , required
   * @param {*} value , default 0
   * @returns
   */

  const sendTx = async (func, actionType, value = 0) => {
    const gasLimit = await estimateGas(func, value);
    if (!isNaN(gasLimit)) {
      return func
        .send({
          gas: gasLimit,
          from: account,
          value,
        })
        .on("transactionHash", (txnHash) => {
          toast.info(getAction(actionType, 0), {
            toastId: txnHash,
            //todo add loading
            // icon: <LoadingOutlined />,
            autoClose: false,
            onClick: () => goScan(txnHash),
          });
        })
        .on("receipt", async (receipt) => {
          const txnHash = receipt?.transactionHash;
          await toast.dismiss(txnHash);
          toast.success(getAction(actionType, 1), {
            // toastId: txnHash,
            onClick: () => goScan(txnHash),
          });
        })
        .on("error", async (err, txn) => {
          const txnHash = txn?.transactionHash;
          await toast.dismiss(txnHash);

          if (err.code === 4001) {
            toast.error("User canceled action");
          } else {
            toast.error(getAction(actionType, 2), {
              onClick: () => goScan(txnHash),
            });
          }
        });
    }
  };

  useEffect(() => {
    if (!account) {
      return;
    }
    const subscription = web3.eth.subscribe(
      "newBlockHeaders",
      (error, block) => {
        if (!error) {
          setBlockNumber(block.number);
        }
      }
    );

    return () => {
      subscription.unsubscribe((error, success) => {
        if (success) {
          console.log("Unsubscribed");
        }
      });
    };
  }, [account]);

  return (
    <Web3Context.Provider
      value={{
        web3,
        chainId,
        networkId,
        account,
        blockNumber,
        connectWallet,
        resetWallet,
        estimateGas,
        sendTx,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const Web3ContextConsumer = Web3Context.Consumer;
