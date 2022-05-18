// import { BsDiscord } from "react-icons/bs";
import "./style.scss";
import {
  FaDiscord,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { socialLinks } from "../../config";
// import joinus from '../../assets/images/join us img.png'
import JoinDiscordBig from "../../assets/images/join-discord-big.svg";
import JoinDiscord from "../../assets/images/join-discord.svg";

const JoinUs = () => {
  return (
    <div className={"join-us-container"}>
      <div className="container">
        <div className="content">
          <div className="left">
            <p className={"join-us-text"}>Join Us</p>
            <p className={"join-us-body"}>
              Special thanks to Season Studio, the design team behind the
              Zzoopers.
            </p>
            <p className={"join-us-body"}>
              Looking forward to seeing your brilliant achitecture work in the
              metaverse!
            </p>
            <div className={"icon-container"}>
              <a
                href={socialLinks.discord}
                target="_blank"
                className="hover-move"
              >
                <FaDiscord className={"join-us-icon"} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                className="hover-move"
              >
                <FaTwitter className={"join-us-icon"} />
              </a>
              <a
                href={socialLinks.telegram}
                target="_blank"
                className="hover-move"
              >
                <FaTelegramPlane className={"join-us-icon"} />
              </a>
              <a
                href={socialLinks.medium}
                target="_blank"
                className="hover-move"
              >
                <FaMediumM className={"join-us-icon"} />
              </a>
            </div>
            <a href={socialLinks.discord} target="_blank">
              <img src={JoinDiscord} className="join-discord-mobile" />
            </a>
          </div>
          <div className="right text-right">
            <a href={socialLinks.discord} target="_blank">
              <img src={JoinDiscordBig} />
            </a>
          </div>
        </div>

        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"> */}

        {/* <div className={'joinus-btn-lg'}>
                            <div style={{display: 'flex'}}>
                                <div style={{margin: 'auto 0 auto auto'}}>
                                    <img src={joinus} style={{width: '100%'}} className={'join-img'}/>
                                </div>
                            </div>
                        </div>
                        <button className={'btn join-discord-btn joinus-btn-sm'}><BsDiscord/> Join our Discord</button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default JoinUs;
