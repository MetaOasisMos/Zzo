import { GrClose } from "react-icons/gr";
import waitingimg from "../../assets/images/waiting-img.png";

const Waiting = ({ payAmount, closeModal }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <GrClose style={{ marginLeft: "auto", cursor: "pointer" }} onClick={closeModal} />
      </div>

      <div style={{ display: "flex", marginTop: 20, width: "100%" }}>
        <img src={waitingimg} style={{ margin: "auto" }} />
      </div>

      <p
        style={{
          marginTop: 20,
          fontWeight: 700,
          fontSize: 32,
          textAlign: "center",
        }}
      >
        Waiting for confirmation
      </p>

      <p
        style={{
          marginTop: 20,
          marginBottom: 36,
          fontWeight: 400,
          fontSize: 18,
          textAlign: "center",
        }}
      >
        You are purchasing Zzoopers for{" "}
        <span style={{ color: "#FFC233" }}>{payAmount} ETH</span>
      </p>
    </>
  );
};

export default Waiting;
