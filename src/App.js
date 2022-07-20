import Hero from "./Components/Hero";
// import tiger from "./assets/images/tiger.png";
import { Link } from "react-router-dom";
import BtnMint from "./assets/images/mint-btn.png";
import WhyZzoppers from "./Components/WhyZzoppers";
import WelcomePage from "./pages/Welcome";
import Utils from "./Components/Utils";
import Meet from "./Components/Meet";
import Carousel from "./Components/Carousel";
// import slider2 from "./assets/images/slider 9.png";
// import loaderimg from "./assets/images/loader.png";
import MintDetails from "./Components/MintDetails";
import Reveal from "./Components/Reveal";
import RoadMap from "./Components/Roadmaps";
import Create from "./Components/Create";
import JoinUs from "./Components/JoinUs";
import Faq from "./Components/FAQ";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useEffect, useRef, useState } from "react";
import cube from "./assets/images/box.gif";
import "./App.scss";

function App() {
  // Refs for scrolls to funcationality
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const meetRef = useRef(null);
  const detailRef = useRef(null);
  const revealRef = useRef(null);
  const mapRef = useRef(null);
  const joinUsRef = useRef(null);
  const faqRef = useRef(null);

  // variable that control the header close and open funcationality
  const [openHeader, setOpenHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scroll = (ref) => {
    setOpenHeader(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // const logKey = (e) => {
  //   if (e.code === "KeyR") {
  //     setRpressed(true);
  //   }
  // };
  // listing for R key press
  // document.addEventListener("keydown", logKey);

  const [rPressed, setRpressed] = useState(true);
  // const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   // when R is pressed a 2 sec wait is added to show the loading screen, and then when loader is set to true,
  //   // new screen gets loaded
  //   if (rPressed) {
  //     setTimeout(() => {
  //       setLoader(true);
  //     }, 2000);
  //   }
  // }, [rPressed]);

  const enter_clicked = () => {
    // setLoader(false);
    setRpressed(false);
  };

  useEffect(() => {
    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //  setIsMobile(true)
    //  }
    if (window.screen.availWidth < 1440) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      {rPressed && !isMobile ? (
        <WelcomePage enter_clicked={enter_clicked} />
      ) : (
        // when R is pressed this section loads
        // !loader ? (
        //   <div className={"loader-container"}>
        //     <div style={{ margin: "auto" }}>
        //       <img src={loaderimg} style={{ width: "100%" }} />
        //     </div>
        //   </div>
        // ) : (
        // <WelcomePage enter_clicked={enter_clicked} />
        // )
        // this home page loads by default, when R is pressed the above section loads
        <>
          {/* Floating Cude */}
          <img
            src={cube}
            className={"floating-cube"}
            onClick={() => {
              scroll(detailRef);
            }}
          />

          {/* Header */}
          <Header
            openHeader={openHeader}
            setOpenHeader={setOpenHeader}
            scroll={scroll}
            heroRef={heroRef}
            whyRef={whyRef}
            meetRef={meetRef}
            detailRef={detailRef}
            revealRef={revealRef}
            mapRef={mapRef}
            joinUsRef={joinUsRef}
            faqRef={faqRef}
          />

          {/* <div className="mint-banner">
            <div className="title1">Let's meet 2929 Zzoopers</div>
            <div className="title2">Pre-mint is ongoing </div>
            <div className="title2 title3">Duration: ONLY 24 hours</div>
            <a href="#mint-details" className="btn-mint hover-move">
              <img src={BtnMint} />
            </a>
          </div> */}

          {/* <div className="spirit-banner">
            <div className="title1">Test online</div>
            <div className="title2">What is your</div>
            <div className="title2 title3">Spirit Animal in WEB 3.0?</div>
            <a href="/spirit" target="_blank" className="start-btn hover-move">
              Start Test!
            </a>
          </div> */}

          {/* Hero Section */}
          <div ref={heroRef}>
            <Hero />
          </div>

          {/* Tiger Image*/}
          <video
            src="/ZZOvideo.mp4"
            loop={true}
            muted={true}
            controls={false}
            autoPlay={true}
            style={{ width: "100%", display: "block" }}
          />
          {/* <img src={tiger} style={{ width: "100%", display: 'block' }} /> */}
          {/* Why Zzoppers section */}
          <div ref={whyRef}>
            <WhyZzoppers />
          </div>

          {/* Unlock Unlimited Utilities Section */}
          <Utils />

          {/* MEET 2929 Section*/}
          <div ref={meetRef}>
            <Meet />
          </div>

          <Carousel />

          {/* Mint Details Section */}
          {/* <div ref={detailRef}>
            <MintDetails />
          </div> */}

          {/* When to Reveal Section */}
          <div ref={revealRef}>
            <Reveal />
          </div>

          {/* Roadmap Section*/}
          <div ref={mapRef}>
            <RoadMap />
          </div>

          {/* Who creates the Zzoopers? Section*/}
          <Create />

          {/* Join Us Section*/}
          <div ref={joinUsRef}>
            <JoinUs />
          </div>

          {/* FAQ */}
          <div ref={faqRef}>
            <Faq />
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
