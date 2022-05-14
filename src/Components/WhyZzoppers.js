import why_img from "../assets/images/whyimage.svg";

const WhyZzoppers = () => {
    return (
        <div className={'why-zzopper-container'}>
            <div className="container" style={{height: '100%'}}>
                <div className="row" style={{height: '100%'}}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div style={{width: '100%', height: '100%', display: 'flex'}}>
                            <div className={'zzopper-text-container'}>
                                <p className={'why-heading-1'}>Why</p>
                                <p className={'why-heading-2'}>Zzoopers?</p>
                                <p className={'why-meta'}>Creatures full of curiosity, Zzoopers do not settle in any one
                                    place. They long for adventures. There are so many wonderful metaverses that are
                                    blooming and prospering, and so many utopias await travel and exploration. To be a
                                    Zzoopers, to experience the MANY!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyZzoppers;