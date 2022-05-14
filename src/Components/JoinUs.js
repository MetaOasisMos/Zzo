import {BsDiscord} from "react-icons/bs";
import {FaDiscord, FaMediumM, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import joinus from '../assets/images/join us img.png'

const JoinUs = () => {
    return (
        <div className={'join-us-container'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div>
                            <p className={'join-us-text'}>Join Us</p>
                            <p className={'join-us-body'}>Special thanks to Season Studio, the design team behind the
                                Zzoopers.</p>
                            <p className={'join-us-body'}>Looking forward to seeing your brilliant achitecture work in
                                the metaverse!</p>
                            <div className={'icon-container'}>
                                <FaDiscord className={'join-us-icon'}/>
                                <FaTwitter className={'join-us-icon'}/>
                                <FaTelegramPlane className={'join-us-icon'}/>
                                <FaMediumM className={'join-us-icon'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className={'joinus-btn-lg'}>
                            <div style={{display: 'flex'}}>
                                <div style={{margin: 'auto 0 auto auto'}}>
                                    <img src={joinus} style={{width: '100%'}} className={'join-img'}/>
                                </div>
                            </div>
                        </div>
                        <button className={'btn join-discord-btn joinus-btn-sm'}><BsDiscord/> Join our Discord</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinUs;