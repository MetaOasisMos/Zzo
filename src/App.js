import Hero from "./Components/Hero";
import tiger from './assets/images/tiger.png';
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
import slider9 from "./assets/images/slider 9.png";
import loaderimg from './assets/images/loader.png'
import welcome_text from './assets/images/welcome-text.png';
import MintDetails from "./Components/MintDetails";
import Reveal from "./Components/Reveal";
import RoadMap from "./Components/RoadMap";
import Create from "./Components/Create";
import JoinUs from "./Components/JoinUs";
import Faq from "./Components/FAQ";
import Footer from "./Components/Footer";
import Header from './Components/header';
import {useEffect, useRef, useState} from "react";
import cube from './assets/images/box.gif'

function App() {
    const heroRef = useRef(null)
    const whyRef = useRef(null)
    const meetRef = useRef(null)
    const detailRef = useRef(null)
    const revealRef = useRef(null)
    const mapRef = useRef(null)
    const joinUsRef = useRef(null)
    const faqRef = useRef(null)

    const [openHeader, setOpenHeader] = useState(false)

    const scroll = (ref) => {
        setOpenHeader(false)
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    const logKey = (e) => {
        if (e.code === 'KeyR') {
            setRpressed(true)
        }
    }

    document.addEventListener('keydown', logKey);

    const [rPressed, setRpressed] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        if (rPressed) {
            setTimeout(
                () => {
                    setLoader(true)
                }, 2000
            );
        }
    }, [rPressed])

    const enter_clicked = () => {
        setLoader(false)
        setRpressed(false)
    }

    return (
        <>
            {rPressed ?
                !loader ?
                    <div className={'loader-container'}>
                        <div style={{margin: 'auto'}}>
                            <img src={loaderimg} style={{width: '100%'}}/>
                        </div>
                    </div>
                    :
                    <div className={'welcome-page'}>
                        <div style={{margin: 'auto', textAlign: 'center'}}>
                            <img src={welcome_text} style={{width: '100%'}}/>
                            <button className={'btn enter-btn'} onClick={enter_clicked}>Enter</button>
                        </div>
                    </div>
                :
                <>
                    <img src={cube} className={'floating-cube'}/>

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

                    <div ref={heroRef}>
                        <Hero/>
                    </div>
                    <div style={{width: '100%'}}>
                        <img src={tiger} style={{width: '100%'}}/>
                    </div>
                    <div ref={whyRef}>
                        <WhyZzoppers/>
                    </div>

                    <Utils/>

                    <div ref={meetRef}>
                        <Meet/>
                    </div>
                    <div className={'mb-3'}>
                        <Scrollers
                            scroller_images={[slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9]}
                            />
                    </div>
                    <div className={'mb-3'}>
                        <Scrollers
                            scroller_images={[slider9, slider4, slider5, slider6, slider7, slider8, slider1, slider2, slider3]}
                            />
                    </div>
                    <div className={'mb-3'}>
                        <Scrollers
                            scroller_images={[slider2, slider1, slider5, slider6, slider3, slider9, slider4, slider7, slider8]}
                            />
                    </div>

                    <div ref={detailRef}>
                        <MintDetails/>
                    </div>
                    <div ref={revealRef}>
                        <Reveal/>
                    </div>

                    <div ref={mapRef}>
                        <RoadMap/>
                    </div>

                    <Create/>

                    <div ref={joinUsRef}>
                        <JoinUs/>
                    </div>

                    <div ref={faqRef}>
                        <Faq/>
                    </div>

                    <Footer/>
                </>
            }
        </>
    );
}

export default App;
