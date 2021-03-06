// import { BsDiscord } from "react-icons/bs";
import "./style.scss";
import { socialLinks } from "../../config";
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
            There are 4 rounds to reveal Zzoopers Genesis. The redemption of
            Zzoopers Genesis begins on July 25th.
            <br />
            <br />
            You can choose to claim, or wait. Better be in a hurry when it's
            your favorite character's turn.
            <br />
            <br />
            <strong>Here is the FULL reveal schedule.</strong>
            <br />
            <br />
            <div>July 25th - Fox & Unicorn</div>
            <div>July 29th - Tiger & Elephant</div>
            <div>August 3rd - Monkey & Rabbit & Deer</div>
            <div>
              August 7th - Cheetah & Penguin & Panda
              <br />
              <br />
            </div>
          </div>
          <div className="desc-line">
            Join our{" "}
            <a
              href={socialLinks.discord}
              target="_blank"
              className="discord-link"
            >
              Discord
            </a>{" "}
            to get more first-hand updates on the reveal!
          </div>
        </div>
        <a
          target="_blank"
          href={socialLinks.discord}
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
