import { GrClose } from "react-icons/gr";
import config from "../../config";

import confirmimg from "../../assets/images/confirm-purchase-img.png";

const ConfirmPurchase = ({ txHash, modalOpen, setModalOpen }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <GrClose style={{ marginLeft: "auto", cursor: "pointer" }} onClick={() => {setModalOpen(!modalOpen)}} />
      </div>

      <div style={{ display: "flex", marginTop: 20, width: "100%" }}>
        <img src={confirmimg} style={{ margin: "auto" }} />
      </div>

      <p
        style={{
          marginTop: 20,
          fontWeight: 700,
          fontSize: 32,
          textAlign: "center",
        }}
      >
        Purchased
      </p>

      <p
        style={{
          marginTop: 20,
          fontWeight: 400,
          fontSize: 18,
          textAlign: "center",
        }}
      >
        Awesome, transaction submitted.
      </p>

      <a
        href={`${config.scanURL}/tx/${txHash}`}
        target="_blank"
        style={{
          marginTop: 20,
          marginBottom: 32,
          fontWeight: 700,
          fontSize: 18,
          color: "#E45F35",
          textAlign: "center",
          display: 'block',
          
          textDecoration: 'none',
        }}
      >
        View on explore
      </a>
    </>
  );
};

export default ConfirmPurchase;
