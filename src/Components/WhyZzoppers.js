import why_img from "../assets/images/whyimage.svg";

const WhyZzoppers = () => {
    return (
        <div className={'why-zzopper-container'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{width: '100%', height: '100%', display: 'flex', paddingBottom: 50}}>
                            <div style={{margin: 'auto'}}>
                                <p className={'why-heading-1'}>Why</p>
                                <p className={'why-heading-2'}>Zzoopers?</p>
                                <p className={'why-meta'}>The Zzoopers believes that somewhere in the metaverse awaits
                                    us to explore, to chase, to build, to develop. We are gonna to be the owner of our
                                    metaverse.</p>
                                <p className={'why-meta'}>As MetaOasis DAO expands to more and more metaverse, the
                                    Zzoopers is the passport that lets you channel into various virgorous metaverse and
                                    have much privilege across multiverse.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <img src={why_img} style={{width: '100%'}} className={'why-zzopper-img'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyZzoppers;