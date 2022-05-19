import { RiCalendar2Line, RiStackLine } from "react-icons/ri";
import { BiStopwatch, BiTime } from "react-icons/bi";
import btn_img from "../../assets/images/btn-image.svg";
import { useState } from "react";
import "./style.scss";
import Modal from "@mui/material/Modal";
import Purchase from "../Modals/purchase";
import Countdown from "../Countdown";
import useMintContract from "../../contract/useMintContract";
import Waiting from "../Modals/waiting";
import ConfirmPurchase from "../Modals/ConfirmPurchase";
import Failed from "../Modals/Failed";

const MintDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const mintContract = useMintContract()

  const doMint = async(amount) => {

    const payAmount = amount * 0.1;

    const result = await mintContract.whitelistMint(payAmount, 'merkleTree', amount)
    console.log('111', result)
  }

  const body = (
    <div className={"modal-body"}>
      <Purchase modalOpen={modalOpen} setModalOpen={setModalOpen} doMint={doMint} />
      {/*<Waiting />*/}
      {/*<ConfirmPurchase />*/}
      {/*<Failed />*/}
    </div>
  );

  return (
    <div className={"mint-details-container"}>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
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
            <div className={"detail-link"}>Details</div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-5 col-sm-5 col-5">
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className={"mint-phase-details-container"}>
                <RiCalendar2Line className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Date</p>
              </div>
              <p className={"mint-phase-detail-text"}>June 8th 2022</p>
            </div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className={"mint-phase-details-container"}>
                <BiTime className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Time</p>
              </div>
              <p className={"mint-phase-detail-text"}>23:00 UTC</p>
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
            {/* <div className="fee-hint">+ Gas fee</div> */}
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-4 col-sm-4 col-4">
            <div className="text-right">
              <button
                className={"btn mint-btn hover-move"}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Mint
              </button>
            </div>
            <div className="text-right">
              <Countdown endTime={1654729200} />
            </div>
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
              <p className={"mint-phase-detail-text"}>June 9th 2022</p>
            </div>
            <div className="info-item">
              <div className={"mint-phase-details-container"}>
                <BiTime className={"mint-phase-icon"} />
                <p className={"mint-phase-detail-name"}>Time</p>
              </div>
              <p className={"mint-phase-detail-text"}>23:00 UTC</p>
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
            {/* <div className="fee-hint">+ Gas fee</div> */}

          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-xs-4 col-sm-4 col-4">
            <div className="text-right">
              {/* <button className={"btn goto-btn hover-move"}>
                Go to <img src={btn_img} className={"goto-btn-img"} />
              </button> */}
              <Countdown endTime={1654815600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintDetails;
