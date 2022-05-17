import logo from "../../assets/images/Logo.png";
import "./style.scss";
import {
  FaDiscord,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className="container">
        <div className="content">
          <div className="item">
            <div className={"footer-logo-container"}>
              <img src={logo} className={"footer-logo"} />
              <p className={"footer-text copyright"}>
                © 2022 Zzoopers. All rights reserved.
              </p>
            </div>
          </div>
          <div className="item">
            <p className={"footer-center-text"}>Term of Use</p>
            <p className={"footer-center-text"}>Privacy Policy</p>
          </div>
          <div className="item socials">
            <div style={{ margin: "auto", display: "flex" }}>
              <FaDiscord className={"join-us-icon"} />
              <FaTwitter className={"join-us-icon"} />
              <FaTelegramPlane className={"join-us-icon"} />
              <FaMediumM className={"join-us-icon"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
