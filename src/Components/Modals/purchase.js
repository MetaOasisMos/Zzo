import {GrClose, GrFormAdd, GrFormSubtract} from "react-icons/gr";
import {useState} from "react";
import clsx from "clsx";

const Purchase = ({closeModal, doMint}) => {

    const [zzopperCount, setZzopperCount] = useState(1)

    return (
        <>
            <div style={{display: 'flex'}}>
                <p style={{marginRight: 'auto', fontSize: 20, fontWeight: 700}}>Confirm purchase</p>
                <GrClose style={{cursor: "pointer"}} onClick={closeModal}/>
            </div>
            <div style={{padding: 16, backgroundColor: '#FBFBF7', display: 'flex', justifyContent: 'space-between', borderRadius: 15}}>
                <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: '-2%'}}>
                    Zzoopers
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <div className={clsx('count-container', zzopperCount === 1 && 'count-min-container')}>
                    <GrFormSubtract onClick={() => {
                        if (zzopperCount > 1) {
                            setZzopperCount(zzopperCount - 1)
                        }
                    }}
                                    className={clsx('count-symbol', zzopperCount === 1 && 'count-min')}/>
                </div>
                <p className={'count-number'} style={{margin: '0 20px', width: '20px', textAlign: 'center'}}>{zzopperCount}</p>
                <div className={clsx('count-container', zzopperCount === 2 && 'count-min-container')}>
                    <GrFormAdd className={'count-symbol'} onClick={() => {
                        if(zzopperCount < 2){
                            setZzopperCount(zzopperCount + 1)
                        }
                    }}/>
                </div>
                </div>
                
            </div>
            <div style={{display: 'flex'}}>
                <p style={{marginLeft: 'auto', fontSize: 14, letterHeight: '-2%', color: '#7F8596'}}>Max Qty 2 mint per
                    whitelist</p>
            </div>
            <div style={{padding: 16, backgroundColor: '#FBFBF7', display: 'flex', borderRadius: 15}}>
                <div style={{fontSize: 24, fontWeight: 700}}>Price</div>
                <div style={{marginLeft: 'auto', fontSize: 24, fontWeight: 700}}>{0.1 * zzopperCount} ETH</div>
            </div>

            <button className={'btn confirm-purchase-btn'} onClick={()=>doMint(zzopperCount)}>Confirm purchase</button>
{/* 
            <p style={{color: '#7F8596', fontSize: 14, fontWeight: 600, marginTop: 40, textAlign: 'center'}}>
                Corrupti et voluptas. Ut ipsum <span style={{color: 'black', fontWeight: 700}}>0.1 ETH</span> fugiat odio. Impedit ullam vel et est rror enim.</p> */}

        </>
    );
}

export default Purchase;