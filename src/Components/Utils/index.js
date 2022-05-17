import {useState} from "react";
import clsx from 'clsx'
import './style.scss'
import exciting_experience_image from '../../assets/images/exciting experience image.png'
import nftairdropleftimg from '../../assets/images/nftairdropleftimg.png';
import nftairdroprightimg from '../../assets/images/nftairdroprightimg.png';
import stakingandharvestingimg from '../../assets/images/hello.gif'
import PhysicalZzoopersAirdropImg from '../../assets/images/PhysicalZzoopersAirdropImg.png'

import utilicon1 from '../../assets/images/utils-icon-1.png'
import utilicon2 from '../../assets/images/utils-icon-2.png'
import utilicon3 from '../../assets/images/utils-icon-3.png'
import utilicon4 from '../../assets/images/utils-icon-4.png'

const Utils = () => {

    const options = [
        "Cross-metaverse Experience",
        "Future Drops",
        "Have Fun and Earn",
        "Physical Zzoopers"
    ]

    const options_sm = [
        {
            text: 'Cross-metaverse Experience',
            icon: utilicon1,
            body: 'Which metaverse would you like to explore? The Sandbox, NFT Worlds, Decentraland, Worldwide Webb, Arcade land,…? Name it! Buckle up and LFG!'
        },
        {
            text: 'Future Drops',
            icon: utilicon4,
            body: 'How to travel to different metaverses? Holding your Zzoopers is all you need to do! Exclusive airdrops will facilitate your cross-metaverse journeys. '
        },
        {
            text: 'Have Fun and Earn',
            icon: utilicon3,
            body: 'What happens if you hold more than one Zzoopers? Different Zzoopers may have different chemistry ganged together. Collect more and hold on to unravel all the fun behind.'
        },
        {
            text: 'Physical Zzoopers',
            icon: utilicon2,
            body: 'Some Zzoopers may drop to you from the metaverse to the real world. Be ready to meet these creatures physically in the near future! '
        },
    ]

    const [selected, setSelected] = useState('Cross-metaverse Experience')

    return (
        <div className={'utils-container'}>
            <div className="container utils-container-lg">
                <div className="content">
                    <div className="left">
                        <p className={'main-title'}>Unlock Unlimited Utilities</p>
                        {options.map((option) => {
                            return (
                                <p onClick={() => {
                                    setSelected(option)
                                }} className={clsx('option', selected === option && 'selected-option')}>{option}</p>
                            )
                        })}
                    </div>
                    <div className="right">
                        <div style={{display: 'flex'}}>
                            <div className={'side-bar-container'}>
                                {selected === "Cross-metaverse Experience" &&
                                <>
                                    <img src={exciting_experience_image} style={{width: '100%'}}/>
                                    <p className={'side-bar-header'}>Welcome here</p>
                                    <p className={'side-bar-para'}>Through Zzoopers, you will come along with us and
                                        explore the limitless ocean in
                                        the metaverse. </p>
                                    <p className={'side-bar-para'}>Let's unlock many different kinds of metaverse
                                        experiences together! When
                                        MetaOasis DAO HQ is entirely completed, you can get early access to there!</p>
                                </>
                                }
                                {selected === "Future Drops" &&
                                <>
                                    <div style={{display: 'flex'}}>
                                        <img src={nftairdropleftimg} className={'nftleftimg'}
                                             style={{margin: '0 auto 0 0'}}/>
                                        <img src={nftairdroprightimg} className={'nftrightimg'}
                                             style={{margin: '0 0 0 auto'}}/>
                                    </div>
                                    <p className={'side-bar-header'}>NFT Airdrop</p>
                                    <p className={'side-bar-para'}>Alongside with the exciting experience, you will
                                        encounter with exclusive airdrop when we enter into some unknown metaverse.</p>
                                    <p className={'side-bar-para'}>A brand new NFT airdrop is a new identity either a
                                        key to embrace a new world.</p>
                                </>
                                }
                                {selected === "Have Fun and Earn" &&
                                <>
                                    <img src={stakingandharvestingimg} style={{width: '100%'}}/>
                                    <p className={'side-bar-para'}>In the wonderful journey, somewhere is for you to
                                        stake your Zzoopers NFT to harvest something pretty cool. </p>
                                    <p className={'side-bar-para'}>Let's play and harvest together! Coming soon!</p>
                                </>
                                }
                                {selected === "Physical Zzoopers" &&
                                <>
                                    <img src={PhysicalZzoopersAirdropImg} style={{width: '100%'}}/>
                                    <p className={'side-bar-para'}>To enhance the IP branding and community culture
                                        vibe, we are to develop physical Zzoopers. </p>
                                    <p className={'side-bar-para'}>Bring our Web3 spirit to the real life and we will
                                        airdrop them to our lovely owners as special gifts!</p>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container utils-container-sm">
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <p className={'utils-heading'}>Unlock Unlimited Utilities</p>
                        {options_sm.map((option) => {
                            return (
                                <div>
                                    <div style={{display: 'flex'}}>
                                        <img src={option.icon} className={'option-icon'}/>
                                        <p className={'option-text'}>{option.text}</p>
                                    </div>
                                    <p className={'option-body'}>{option.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Utils;