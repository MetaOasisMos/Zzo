import roadmapicon1 from '../assets/images/roadmap-icon1.png';
import roadmapicon2 from '../assets/images/roadmap-icon2.png';
import roadmapicon3 from '../assets/images/roadmap-icon3.png';
import roadmapicon4 from '../assets/images/roadmap-icon4.png';

const RoadMap = () => {
    return (
        <div className={'roadmap-container'}>
            <div className="container">
                <p className={'roadmap-zzoopers-text'}>ZZOOPERS</p>
                <p className={'roadmap-heading'}>Roadmap</p>
                <p className={'roadmap-metatext'}>The future we envision and the landscape we are to explore.</p>

                <div className={'row mt-5'}>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{display: 'flex'}}>
                            <div className={'roadmap-index-container'}>
                                <p className={'roadmap-index-text'}>1</p>
                            </div>
                            <div style={{ color: 'white'}}>
                                <div style={{display: 'flex'}}>
                                    <img className={'roadmap-icon'} src={roadmapicon1}/>
                                    <p className={'road-map-name'}>Mint & Reveal</p>
                                </div>
                                <p className={'road-map-text'}>Mystery Boxes available for mint
                                    Unlock Mystery Boxes to reveal the Zzoopers NFTs</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{display: 'flex'}}>
                            <div className={'roadmap-index-container'}>
                                <p className={'roadmap-index-text'}>2</p>
                            </div>
                            <div style={{ color: 'white'}}>
                                <div style={{display: 'flex'}}>
                                    <img className={'roadmap-icon'} src={roadmapicon2}/>
                                    <p className={'road-map-name'}>Stake & Harvest</p>
                                </div>
                                <p className={'road-map-text'}>Stake Zzoopers NFTs and harvest something
                                    ineresting/unknown</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{display: 'flex'}}>
                            <div className={'roadmap-index-container'}>
                                <p className={'roadmap-index-text'}>3</p>
                            </div>
                            <div style={{color: 'white'}}>
                                <div style={{display: 'flex'}}>
                                    <img className={'roadmap-icon'} src={roadmapicon3}/>
                                    <p className={'road-map-name'}>Play & Earn</p>
                                </div>
                                <p className={'road-map-text'}>Holders of Zzoopers NFTs can claim/be airdropped Sandbox</p>
                                <p className={'road-map-text'}>Voxel Avatar versions of
                                    their Zzoopers.</p>
                                <p>
                                    Holders of Zzoopers NFTs can play and earn in some mini-games launched by MetaOasis
                                    DAO</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{display: 'flex'}}>
                            <div className={'roadmap-index-container'}>
                                <p className={'roadmap-index-text'}>4</p>
                            </div>
                            <div style={{ color: 'white'}}>
                                <div style={{display: 'flex'}}>
                                    <img className={'roadmap-icon'} src={roadmapicon4}/>
                                    <p className={'road-map-name'}>Co-created Event</p>
                                </div>
                                <p className={'road-map-text'}>Launch the "Physical Zzoopers Coloring" Competition</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RoadMap;