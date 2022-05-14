import {GrClose} from "react-icons/gr";
import confirmimg from "../../assets/images/confirm-purchase-img.png";

const ConfirmPurchase = () => {
    return (
        <>
             <div style={{display: 'flex'}}>
                <GrClose style={{marginLeft: 'auto'}} />
            </div>

            <div style={{display: 'flex', marginTop: 20, width: '100%'}}>
                <img src={confirmimg} style={{margin: 'auto'}} />
            </div>

            <p style={{marginTop: 20, fontWeight: 700, fontSize: 32, textAlign: 'center'}}>Purchased</p>

            <p style={{marginTop: 20, fontWeight: 400, fontSize: 18, textAlign: 'center'}}>
                Awesome, transaction submitted.
            </p>

            <p style={{marginTop: 20, fontWeight: 700, fontSize: 18, color: '#E45F35', textAlign: 'center'}}>
                View on explore</p>

        </>
    );
}

export default ConfirmPurchase;