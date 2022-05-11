import Hero from "./Components/Hero";
import tiger from './assets/images/tiger.png';
import WhyZzoppers from "./Components/WhyZzoppers";
import Utils from "./Components/Utils";

function App() {
    return (
        <>
            <Hero/>
            <div style={{width: '100%'}}>
                <img src={tiger} style={{width: '100%'}}/>
            </div>
            <WhyZzoppers />
            <Utils />
        </>
    );
}

export default App;
