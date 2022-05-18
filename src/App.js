import Hero from "./Components/Hero";
// import tiger from "./assets/images/tiger.png";
import WhyZzoppers from "./Components/WhyZzoppers";
import Utils from "./Components/Utils";
import Meet from "./Components/Meet";
import Scrollers from "./Components/Scrollers";
import slider1 from "./assets/images/slider 1.png";
import slider2 from "./assets/images/slider 2.png";
import slider3 from "./assets/images/slider 3.png";
import slider4 from "./assets/images/slider 4.png";
import slider5 from "./assets/images/slider 5.png";
import slider6 from "./assets/images/slider 6.png";
import slider7 from "./assets/images/slider 7.png";
import slider8 from "./assets/images/slider 8.png";
// import slider2 from "./assets/images/slider 9.png";
import loaderimg from "./assets/images/loader.png";
import welcome_text from "./assets/images/welcome-text.png";
import enter_btn from "./assets/images/enter-btn.png";
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

  const scroll = (ref) => {
    setOpenHeader(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const logKey = (e) => {
    if (e.code === "KeyR") {
      setRpressed(true);
    }
  };
  // listing for R key press
  document.addEventListener("keydown", logKey);

  const [rPressed, setRpressed] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // when R is pressed a 2 sec wait is added to show the loading screen, and then when loader is set to true,
    // new screen gets loaded
    if (rPressed) {
      setTimeout(() => {
        setLoader(true);
      }, 2000);
    }
  }, [rPressed]);

  const enter_clicked = () => {
    setLoader(false);
    setRpressed(false);
  };

  return (
    <>
      {rPressed ? (
        // when R is pressed this section loads
        !loader ? (
          <div className={"loader-container"}>
            <div style={{ margin: "auto" }}>
              <img src={loaderimg} style={{ width: "100%" }} />
            </div>
          </div>
        ) : (
          <div className={"welcome-page"}>
            <div style={{ margin: "auto", textAlign: "center" }}>
              <img src={welcome_text} className="welcome-text" />
              {/* when enter click, will be sent back to home page*/}
              <img src={enter_btn} className="enter-btn" onClick={enter_clicked} />
              {/* <button className={"btn enter-btn"} onClick={enter_clicked}>
                Enter
              </button> */}
            </div>
          </div>
        )
      ) : (
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

          {/* Hero Section */}
          <div ref={heroRef}>
            <Hero />
          </div>

          {/* Tiger Image*/}
          <video src="/ZZOvideo.mp4" loop={true} muted={true} controls={false} autoPlay={true} style={{width: '100%', display: 'block'}} />
          {/* <img src={tiger} style={{ width: "100%", display: 'block' }} /> */}
          {/* Why Zzoppers section */}
          <div ref={whyRef}>
            <WhyZzoppers />
          </div>

          {/* Unlock Unlimited Utilities Section */}
          <Utils />

          {/* MEET 5555 Section*/}
          <div ref={meetRef}>
            <Meet />
          </div>

          {/* Three scrollers for gallery*/}
          <div className={"mb-20"}>
            <Scrollers
              scroller_images={[
                slider2,
                slider1,
                slider5,
                slider6,
                slider3,
                slider2,
                slider4,
                slider7,
                slider8,
                slider1,
                slider2,
                slider3,
                slider4,
                slider5,
              ]}
              reverse={true}
            />
          </div>
          <div className={"mb-20"}>
            <Scrollers
              scroller_images={[
                slider2,
                slider1,
                slider5,
                slider6,
                slider3,
                slider2,
                slider4,
                slider7,
                slider8,
                slider1,
                slider2,
                slider3,
                slider4,
                slider5,
              ]}
            />
          </div>
          <div className={"mb-20"}>
            <Scrollers
              scroller_images={[
                slider2,
                slider1,
                slider5,
                slider6,
                slider3,
                slider2,
                slider4,
                slider7,
                slider8,
                slider1,
                slider2,
                slider3,
                slider4,
                slider5,
              ]}
              reverse={true}
            />
          </div>

          {/* Mint Details Section */}
          <div ref={detailRef}>
            <MintDetails />
          </div>

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
