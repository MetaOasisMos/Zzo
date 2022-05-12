import {RiCalendar2Line, RiStackLine} from "react-icons/ri";
import {BiStopwatch, BiTime} from "react-icons/bi";
import btn_img from '../assets/images/btn-image.png';

const MintDetails = () => {
    return (
        <div className={'mint-details-container'}>
            <div className="container">
                <p className={'mint-header'}>Mint Details</p>
                <p className={'mint-meta-text'}>There are two phases to complete the mint of <b>5555 total supply.</b></p>

                <hr/>

                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <p className={'mint-phase'}>Phase 1</p>
                        <p className={'mint-name'}>Whitelist Premint</p>
                        <p className={'mint-details'}><u>Details</u></p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <RiCalendar2Line className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Date</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>05:15 2022</p>
                        </div>
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <BiTime className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Time</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>08:00 UTC</p>
                        </div>
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <BiStopwatch className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Duration</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>12 hours</p>
                        </div>
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <RiStackLine className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Max Qty</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>2</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <p className={'eth-amount'}>0.1 ETH</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <div>
                            <button className={'btn mint-btn'}>Mint</button>
                        </div>
                        <div>
                            <button className={'btn time-btn'}>19h 52m 33s</button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <p className={'mint-phase'}>Phase 2</p>
                        <p className={'mint-name'}>Public Mint</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <RiCalendar2Line className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Date</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>05:15 2022</p>
                        </div>
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <BiTime className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Time</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>20:00 UTC</p>
                        </div>
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <BiStopwatch className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Duration</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>Until the collection sold out</p>
                        </div>
                        <div style={{display: 'flex', marginBottom: 10}}>
                            <div className={'mint-phase-details-container'}>
                                <RiStackLine className={'mint-phase-icon'}/>
                                <p className={'mint-phase-detail-name'}>Max Qty</p>
                            </div>
                            <p className={'mint-phase-detail-text'}>3</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <p className={'eth-amount'}>0.15 ETH</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        <div>
                            <button className={'btn goto-btn'}>Go to <img src={btn_img} style={{width: 100}}/></button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default MintDetails;