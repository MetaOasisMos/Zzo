import hero_img from '../assets/images/hero image.svg'

const Hero = () => {
    return (
        <div className={'hero'}>
            <div className="container">
                <div className="row hero-content">
                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <div style={{width: '100%', height: '100%', display: 'flex'}}>
                            <div style={{margin: 'auto'}}>
                                <p className={'hero-heading-1'}>What is</p>
                                <p className={'hero-heading-2'}>Zzoopers?</p>
                                <p className={'hero-meta'}>Zzoopers Genesis is a collection of 5555 unique animal
                                    avatars with different species and personalities. They are born on the Ethereum
                                    blockchain and ready to cross and explore the many metaverses!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                        <img src={hero_img} style={{width: '100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;