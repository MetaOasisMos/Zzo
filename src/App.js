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
import MintDetails from "./Components/MintDetails";
import Reveal from "./Components/Reveal";
import RoadMap from "./Components/RoadMap";
import Create from "./Components/Create";
import JoinUs from "./Components/JoinUs";
import Faq from "./Components/FAQ";


function App() {
    return (
        <>
            <Hero/>
            <div style={{width: '100%'}}>
                <img src={tiger} style={{width: '100%'}}/>
            </div>
            <WhyZzoppers/>
            <Utils/>
            <Meet/>
            <Scrollers
                scroller_images={[slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9]}/>
            <Scrollers
                scroller_images={[slider9, slider4, slider5, slider6, slider7, slider8, slider1, slider2, slider3]}/>
            <Scrollers
                scroller_images={[slider2, slider1, slider5, slider6, slider3, slider9, slider4, slider7, slider8]}/>

            <MintDetails />

            <Reveal />

            <RoadMap />

            <Create />

            <JoinUs />

            <Faq />

        </>
    );
}

export default App;
