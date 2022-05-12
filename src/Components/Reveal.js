import {BsDiscord} from "react-icons/bs";

const Reveal = () => {
    return (
        <div className={'reveal-container'}>
            <div className="container">
                <p className={'reveal-zzoppers-text'}>ZZOOPERS</p>
                <p className={'reveal-zzoppers-heading'}>When to reveal?</p>
                <p className={'reveal-zzoppers-body'}>The collection of 5555 NFTs will be divided into 5 rounds to
                    reveal the Zzoopers <br/>
                    NFTs after thepublic mint.
                </p>
                <p className={'reveal-zzoppers-body'}>Each round, two kinds of animal characters will go live and you
                    can choose to
                    <br/>unlock or not.</p>

                <p className={'reveal-zzoppers-body'}><b style={{color: '#FFC233'}}>Join our Discord! </b>
                    If there are any updates of the reveal, we will share with our community at
                    once. </p>
                <button className={'btn join-discord-btn'}><BsDiscord/> Join our Discord</button>
            </div>
        </div>
    );
}

export default Reveal;