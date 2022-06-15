import { RiCalendar2Line, RiStackLine } from "react-icons/ri";
import { BiStopwatch, BiTime } from "react-icons/bi";
import { Web3Context } from "../../context/Web3Context";
import btn_img from "../../assets/images/btn-image.svg";
import { useState, useEffect, useContext } from "react";
// import MintComingImg from '../../assets/images/mint-coming.png';
import { toast } from "react-toastify";
import "./style.scss";
import config from "../../config";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Purchase from "../Modals/purchase";
import Countdown from "../Countdown";
import useMintContract from "../../contract/useMintContract";
import Waiting from "../Modals/waiting";
import ConfirmPurchase from "../Modals/ConfirmPurchase";
import Failed from "../Modals/Failed";

const MintDetails = () => {
  // return <img src={MintComingImg} className="mint-coming-img"/>

  const [modalOpen, setModalOpen] = useState(false);
  const [mintStep, setMintStep] = useState(0);
  const [mintedNum, setMintedNum] = useState(0);
  const [phase1Started, setPhase1Started] = useState(false);
  const [phase2Started, setPhase2Started] = useState(false);
  const [needToPay, setNeedToPay] = useState(0);
  const [txHash, setTxHash] = useState("");
  const { account, connectWallet } = useContext(Web3Context);
  const mintContract = useMintContract();

  const getMerkleTree = async () => {
    const res = await axios.post(`${config.apiURL}/metaoasismos/api/v1`, {
      jsonrpc: "2.0",
      method: "getWhitelistProof",
      params: account,
      id: 1,
    });
    const proof = res.data.result;
    if (proof.length) {
      return proof;
    } else {
      toast.error("You are not whitelisted");
      return false;
    }
  };

  const doMint = async (amount) => {
    setMintStep(1);

    const merkleTree = await getMerkleTree();
    if (!merkleTree) {
      setMintStep(0);
      return;
    }
    try {
      const payAmount = amount * 0.1;
      setNeedToPay(payAmount);
      const result = await mintContract.whitelistMint(
        payAmount,
        merkleTree,
        amount
      );
      // got result
      setMintStep(result.status ? 2 : 3);
      setTxHash(result.transactionHash);
    } catch (err) {
      setMintStep(0);
    }
  };

  const closeModal = () => {
    setMintStep(0);
    setModalOpen(false);
    setNeedToPay(0);
    setTxHash("");
  };

  const getMintedNum = async () => {
    const res = await mintContract.getMintedNumber();
    setMintedNum(res);
  };

  useEffect(() => {
    if (!account) {
      return;
    }
    getMintedNum();
  }, [account]);

  const body = (
    <div className={"modal-body"}>
      {mintStep === 0 && <Purchase closeModal={closeModal} doMint={doMint} />}
      {mintStep === 1 && (
        <Waiting payAmount={needToPay} closeModal={closeModal} />
      )}
      {mintStep === 2 && (
        <ConfirmPurchase txHash={txHash} closeModal={closeModal} />
      )}
      {mintStep === 3 && <Failed closeModal={closeModal} />}
    </div>
  );

  return (
    <div className={"mint-details-container"}>
      <Modal open={modalOpen} onClose={closeModal}>
        {body}
      </Modal>

      <div className="container">
        <div className={"mint-header"}>Mint Details</div>
        <div className={"mint-meta-text"}>
          There are <b>two phases</b> to complete the mint of the 5555 Zzoopers
          Evo.
        </div>

        <div className="row g-0 mint-item">
          <div className="col-xl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12">
            <div className={"mint-phase"}>Phase 1</div>
            <div className={"mint-name"}>Whitelist Premint</div>
            {/* <div className={"detail-link"}>Details</div> */}
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-5 col-sm-5 col-5">
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className={"mint-phase-details-container"}>
                <RiCalendar2Line className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Date</p>
              </div>
              <p className={"mint-phase-detail-text"}>June 19th 2022</p>
            </div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className={"mint-phase-details-container"}>
                <BiTime className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Time</p>
              </div>
              <p className={"mint-phase-detail-text"}>11:00 AM UTC</p>
            </div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className={"mint-phase-details-container"}>
                <BiStopwatch className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Duration</p>
              </div>
              <p className={"mint-phase-detail-text"}>24 hours</p>
            </div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className={"mint-phase-details-container"}>
                <RiStackLine className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Max Qty</p>
              </div>
              <p className={"mint-phase-detail-text"}>2</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-3 col-sm-3 col-3 text-center">
            <p className={"eth-amount"}>0.1 ETH</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-4 col-sm-4 col-4">
            {phase1Started? (
              <div className="text-right">
                {account ? (
                  <>
                    <button
                      className={"btn mint-btn hover-move"}
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      Mint
                    </button>
                    {mintedNum > 0 && (
                      <div className="minted-num">
                        You have minted {mintedNum} NFT
                        {mintedNum > 1 ? "s" : ""}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className={"btn mint-btn hover-move"}
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            ) : (
              <div className="text-right">
                {/** new Date('2022-06-19 19:00').valueOf()  */}
                <Countdown
                  endTime={1655636400}
                  onComplete={() => setPhase1Started(true)}
                />
              </div>
            )}
          </div>
        </div>

        <div className="row g-0 mint-item">
          <div className="col-xl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12">
            <p className={"mint-phase"}>Phase 2</p>
            <p className={"mint-name"}>Public Mint</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-5 col-sm-5 col-5">
            <div className="info-item">
              <div className={"mint-phase-details-container"}>
                <RiCalendar2Line className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Date</p>
              </div>
              <p className={"mint-phase-detail-text"}>June 20th 2022</p>
            </div>
            <div className="info-item">
              <div className={"mint-phase-details-container"}>
                <BiTime className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Time</p>
              </div>
              <p className={"mint-phase-detail-text"}>11:00 AM UTC</p>
            </div>
            <div className="info-item">
              <div className={"mint-phase-details-container"}>
                <BiStopwatch className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Duration</p>
              </div>
              <p className={"mint-phase-detail-text"}>Until sold out</p>
            </div>
            <div className="info-item">
              <div className={"mint-phase-details-container"}>
                <RiStackLine className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Max Qty</p>
              </div>
              <p className={"mint-phase-detail-text"}>3</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-3 col-sm-3 col-3 text-center">
            <p className={"eth-amount"}>0.15 ETH</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-4 col-sm-4 col-4">
            <div className="text-right">
              {phase2Started ? (
                <button className={"btn goto-btn hover-move"}>
                  Go to <img src={btn_img} className={"goto-btn-img"} />
                </button>
              ) : (
                <Countdown
                  endTime={1655722800}
                  onComplete={() => setPhase2Started(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintDetails;
