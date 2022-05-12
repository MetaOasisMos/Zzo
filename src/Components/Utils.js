import {useState} from "react";
import clsx from 'clsx'
import exciting_experience_image from '../assets/images/exciting experience image.png'
import nftairdropleftimg from '../assets/images/nftairdropleftimg.png';
import nftairdroprightimg from '../assets/images/nftairdroprightimg.png';
import stakingandharvestingimg from '../assets/images/stakingandharvestingimg.png'
import PhysicalZzoopersAirdropImg from '../assets/images/PhysicalZzoopersAirdropImg.png'

const Utils = () => {

    const options = [
        "Exciting Experience",
        "NFT Airdrop",
        "Staking & Harvesting",
        "Physical Zzoopers Airdrop"
    ]

    const [selected, setSelected] = useState('Exciting Experience')

    return (
        <div className={'utils-container'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <p className={'utils-heading'}>Unlock Unlimited Utilities</p>
                        {options.map((option) => {
                            return (
                                <p onClick={() => {
                                    setSelected(option)
                                }} className={clsx('option', selected === option && 'selected-option')}>{option}</p>
                            )
                        })}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div style={{display: 'flex'}}>
                            <div className={'side-bar-container'}>
                                {selected === "Exciting Experience" &&
                                <>
                                    <img src={exciting_experience_image} style={{width: '100%'}}/>
                                    <p className={'side-bar-header'}>Welcome here</p>
                                    <p className={'side-bar-para'}>Through Zzoopers, you will come along with us and explore the limitless ocean in
                                        the metaverse. </p>
                                    <p className={'side-bar-para'}>Let's unlock many different kinds of metaverse experiences together! When
                                        MetaOasis DAO HQ is entirely completed, you can get early access to there!</p>
                                </>
                                }
                                {selected === "NFT Airdrop" &&
                                <>
                                    <div style={{display: 'flex'}}>
                                        <img src={nftairdropleftimg} className={'nftleftimg'} style={{margin: '0 auto 0 0'}} />
                                        <img src={nftairdroprightimg} className={'nftrightimg'} style={{margin: '0 0 0 auto'}}/>
                                    </div>
                                    <p className={'side-bar-header'}>NFT Airdrop</p>
                                    <p className={'side-bar-para'}>Alongside with the exciting experience, you will encounter with exclusive airdrop when we enter into some unknown metaverse.</p>
                                    <p className={'side-bar-para'}>A brand new NFT airdrop is a new identity either a key to embrace a new world.</p>
                                </>
                                }
                                {selected === "Staking & Harvesting" &&
                                <>
                                   <img src={stakingandharvestingimg} style={{width: '100%'}}/>
                                    <p className={'side-bar-para'}>In the wonderful journey, somewhere is for you to stake your Zzoopers NFT to harvest something pretty cool. </p>
                                    <p className={'side-bar-para'}>Let's play and harvest together! Coming soon!</p>
                                </>
                                }
                                 {selected === "Physical Zzoopers Airdrop" &&
                                <>
                                   <img src={PhysicalZzoopersAirdropImg} style={{width: '100%'}}/>
                                    <p className={'side-bar-para'}>To enhance the IP branding and community culture vibe, we are to develop physical Zzoopers. </p>
                                    <p className={'side-bar-para'}>Bring our Web3 spirit to the real life and we will airdrop them to our lovely owners as special gifts!</p>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Utils;