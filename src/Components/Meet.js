import zzoppers from '../assets/images/zoopers img.png'

const Meet = () => {
    return (
        <div className={'meet-component'}>
            <div className="container">
                <div style={{width: '100%', display: 'flex'}}>
                    <div style={{margin: 'auto', textAlign: 'center'}}>
                        <p className={'meet-text-1'}>LET'S</p>
                        <p className={'meet-text-2'}>MEET 5555</p>
                        <img src={zzoppers} style={{width: '100%'}}/>
                        <p className={'meet-text-3'}>There are 10 unique animal characters in the Zzoopers.</p>
                        <p className={'meet-meta-text'} style={{margin: '20px 0 30px 0'}}>Tiger, Elephant, Panda, Unicorn, Leopard, Elk, Fox, Monkey, Penguin, and Rabbit.</p>
                        <p className={'meet-meta-text'}>Each Zzoopers has its life in the metaverse and is programmatically generated from 10
                            different
                            animal avatars and more than 2000 possible traits, including skin, clothing, glasses,
                            headset,
                            tusk, nose, ear, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meet;