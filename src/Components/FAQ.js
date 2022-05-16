import {useState} from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import clsx from "clsx";

const Faq = () => {

    const [faqs, setFaqs] = useState([
        {
            heading: 'Why to launch Zzoopers?',
            body: 'There are 800 whitelists exclusively for our dear community. Join our Discord and go to "Get-Whitelist" channel, where you will know the full rules of how to get the whitelist. Good luck!',
            open: false
        },
        {
            heading: 'What does Zzoopers mean to MetaOasis DAO?',
            body: 'There are 800 whitelists exclusively for our dear community. Join our Discord and go to "Get-Whitelist" channel, where you will know the full rules of how to get the whitelist. Good luck!',
            open: false
        },
        {
            heading: 'How to get the whitelist of Zzoopers?',
            body: 'There are 800 whitelists exclusively for our dear community. Join our Discord and go to "Get-Whitelist" channel, where you will know the full rules of how to get the whitelist. Good luck!',
            open: false
        },
        {
            heading: 'When can l open the mystery box?',
            body: 'There are 800 whitelists exclusively for our dear community. Join our Discord and go to "Get-Whitelist" channel, where you will know the full rules of how to get the whitelist. Good luck!',
            open: false
        },
        {
            heading: 'Does holding Zzoopers mean joining MetaOasis DAO as DAO members?',
            body: 'There are 800 whitelists exclusively for our dear community. Join our Discord and go to "Get-Whitelist" channel, where you will know the full rules of how to get the whitelist. Good luck!',
            open: false
        },
        {
            heading: 'What\'s the difference between holding Zzoopers and holding $MOS token?',
            body: 'There are 800 whitelists exclusively for our dear community. Join our Discord and go to "Get-Whitelist" channel, where you will know the full rules of how to get the whitelist. Good luck!',
            open: false
        },
    ])

    const make_active = (faq) => {
        const _faqs = faqs.map((item) => {
            item.open = item.heading === faq.heading;
            return item
        })
        setFaqs(_faqs)
    }

    return (
        <div className={'faq-container'}>
            <div className="container">
                <p className={'faq-container-text'}>ZZOOPERS</p>
                <p className={'faq-container-heading'}>FAQ</p>
            </div>

            {faqs.map((faq, index) => {
                return (
                    <div className={faq.open && 'faq-container-active'} >
                        <div className={'container'} style={{borderBottom: '1px solid #E7E7E1'}}>
                            <div className={'faq-sub-container'} onClick={() => {
                                make_active(faq)
                            }}>
                                <div className={clsx(!faq.open ? 'index-container-close' : 'index-container-open', 'index-container')}>
                                    {!faq.open ? <p className={'index-text'}>{index + 1}</p> :
                                        <MdOutlineKeyboardArrowDown className={'index-text'}/>}
                                </div>
                                <div>
                                    <p className={'faq-heading'}>{faq.heading}</p>
                                    <p className={clsx(!faq.open ? 'faq-body-inactive' : 'faq-body-active', 'faq-body')}>
                                        {faq.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Faq;