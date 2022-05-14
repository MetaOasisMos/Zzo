import {GrClose} from "react-icons/gr";
import errorimg from "../../assets/images/error-img.png";

const Failed = () => {
    return (
        <>
             <div style={{display: 'flex'}}>
                <GrClose style={{marginLeft: 'auto'}} />
            </div>

            <div style={{display: 'flex', marginTop: 20, width: '100%'}}>
                <img src={errorimg} style={{margin: 'auto'}} />
            </div>

            <p style={{marginTop: 20, fontWeight: 700, fontSize: 32, textAlign: 'center'}}>Something went wrong</p>

            <p style={{marginTop: 20, fontWeight: 400, fontSize: 18, textAlign: 'center'}}>Sorry, transaction failed</p>

            <button className={'btn confirm-purchase-btn'}>Try Again</button>

        </>
    );
}

export default Failed;