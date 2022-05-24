import why_fox from "../../assets/images/why-fox.png";
import { Parallax } from "react-scroll-parallax";
import "./style.scss";

const WhyZzoppers = () => {
  return (
    <div className={"why-zzopper-container"}>
      <div className="container">
        <div className="content">
          <div className={"zzopper-text-container left"}>
            <p className={"subtitle"}>Why</p>
            <p className={"title"}>Zzoopers?</p>
            <p className={"desc"}>
              Whether kids or grown-ups, many of us have enjoyed touching and
              thought-provoking experiences in fascinating animations based on
              animal stories. Such as Zootopia, where we see a world of
              acceptance, tolerance and peaceful co-existence. <br />
              <br />
              What if we can deliver and develop such spirit vibe in the
              metaverse? Together let's enter into the world of Zzoopers, where
              we practice acceptance instead of prejudice, and we celebrate one
              another for what makes us unique!
            </p>
          </div>
          <div className="right">
            <Parallax translateX={[88, -44]}>
              <img src={why_fox} />
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyZzoppers;

/*<div className="row" style={{height: '100%'}}>
                    <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12">
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
                </div>*/
