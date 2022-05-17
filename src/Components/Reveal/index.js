// import { BsDiscord } from "react-icons/bs";
import "./style.scss";
import heading from "../../assets/images/reveal-heading.svg";
import JoinDiscord from "../../assets/images/join-discord.svg";

const Reveal = () => {
  return (
    <div className={"reveal-container"}>
      <div className="container">
        <p className={"reveal-zzoppers-text small-title"}>ZZOOPERS</p>
        <p className={"reveal-zzoppers-heading-sm"}>When to reveal?</p>

        <img className={"reveal-zzoppers-heading-lg"} src={heading} />
        <div className="desc">
          <div className="desc-line">
            There are 5 rounds to reveal Zzoopers Genesis after the public mint.
            The exact reveal time is TBA.
          </div>
          <div className="desc-line">
            At each round of reveal, 2 out of the 10 animal characters will go
            live.{" "}
          </div>
          <div className="desc-line">
            You can choose to claim, or wait. Better be hurry if you have your
            favourite character.
          </div>
        </div>
        <a
          target="_blank"
          href="https://metaoasis.fun"
          className="hover-move"
          style={{ display: "block" }}
        >
          <img src={JoinDiscord} className="join-btn" />
        </a>
        {/* <button className={"btn join-discord-btn"}>
          <BsDiscord /> Join our Discord
        </button> */}
      </div>
    </div>
  );
};

export default Reveal;
