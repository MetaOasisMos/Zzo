import hero_img from '../assets/images/hero image.svg'

const Hero = () => {
    return (
        <div className={'hero'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{width: '100%', height: '100%', display: 'flex'}}>
                            <div style={{margin: 'auto'}}>
                                <p className={'hero-heading-1'}>What is</p>
                                <p className={'hero-heading-2'}>Zzoopers?</p>
                                <p className={'hero-meta'}>The Zzoopers is a genesis collection of 5555 unique NFTs -
                                    <b>3D voxel anthropomorphic animal </b>
                                    characters on the Ethereum chain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <img src={hero_img} style={{width: '90%'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;