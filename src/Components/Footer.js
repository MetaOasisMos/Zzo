import logo from '../assets/images/Logo.png'
import {FaDiscord, FaMediumM, FaTelegramPlane, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-2">
                        <div className={'footer-logo-container'}>
                            <img src={logo} className={'footer-logo'}/>
                            <p className={'footer-text'}>© 2022 Zzoopers. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-2">
                        <div style={{display: 'flex'}}>
                            <p className={'footer-center-text'}>Term of Use</p>
                            <p className={'footer-center-text'}>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-2">
                        <div style={{display: 'flex'}}>
                            <div style={{margin: 'auto', display: 'flex'}}>
                                <FaDiscord className={'join-us-icon'}/>
                                <FaTwitter className={'join-us-icon'}/>
                                <FaTelegramPlane className={'join-us-icon'}/>
                                <FaMediumM className={'join-us-icon'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;