import { useState } from "react";
import "./style.scss";
import { socialLinks } from "../../config";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      heading: "What is Zzoopers Genesis?",
      body: "Zzoopers Genesis is a collection of unique 3D voxel anthropomorphic animal avatars with different species and personalities.",
      open: false,
    },
    {
      heading: "Why Zzoopers?",
      body: "Joining Zzoopers will unlock unlimited possibilities in this multi-metaverse world.",
      open: false,
    },
    {
      heading: "Which blockchain?",
      body: "Ethereum. Upcoming gaming features would consider deploying on L2.",
      open: false,
    },
    {
      heading: "How many Zzoopers Genesis?",
      body: "5555 in total.",
      open: false,
    },
    {
      heading: "What are the animal characters in Zzoopers Genesis?",
      body: "10: Tiger, Elephant, Panda, Unicorn, Cheetah, Deer, Fox, Monkey, Penguin, and Rabbit.",
      open: false,
    },
    {
      heading: "How many whitelists and how to get whitelisted?",
      body: `- 2000 in total. 800 out of 2000 are exclusively for whitelist winners in the MetaOasis DAO community. The rest are distributed to our collaborators and partners. We have over 40 IP and NFT collaborations on the list and the number keeps growing.<br/><br/>
            - Join our <a href="${socialLinks.discord}" target="_blank">Discord</a> and go to "Get-Whitelist" channel where the rules are posted. Or you can try to win in the events held by our collaborators and partners. Good luck! `,
      open: false,
    },
    {
      heading: "Will unminted whitelists go to public mints?",
      body: "Yes.",
      open: false,
    },
    {
      heading: "What are the maximum mints per wallet?",
      body: "2 for whitelist premint; 3 for public mint.",
      open: false,
    },
    {
      heading: "When and how to reveal?",
      body: `
            - The revelation of the Zzoopers Genesis is expected to happen in late June or early July 2022. The exact time is TBA.<br/><br/>
            - There are 5 rounds to reveal Zzoopers Genesis after the public mint. At each round of reveal, 2 out of the 10 animal characters will go live. You can choose to claim, or wait. Better be hurry when it's your favorite character's turn. <br/><br/>
            - Join our <a href="${socialLinks.discord}" target="_blank">Discord</a> to get first-hand updates on the reveal! 
            `,
      open: false,
    },
    {
      heading: "Are the 5555 Zzoopers Genesis randomly distributed?",
      body: `
                - Yes. The team will have no control over the rarities distribution. <br/><br/>         
                - However, since there are 10 animal characters that are revealed with a different schedule, you have a choice of when to claim to have a better chance to secure your favourite characters.
            `,
      open: false,
    },
    {
      heading: "What server will Zzoopers Genesis be hosted on?",
      body: "On IPFS.",
      open: false,
    },
    {
      heading: "Any staking or play-to-earn coming?",
      body: "Stay tuned for further announcements!",
      open: false,
    },
    {
      heading: "What IP rights do the holders of Zzoopers Genesis receive?",
      body: "Holders have full commercial art rights for the Zzoopers Genesis they own. Please refer to Terms and Conditions for further information.",
      open: false,
    },
    {
      heading: "Who is the team behind Zzoopers?",
      body: `
            <b>MetaOasis DAO</b>, one of the first DAOs focusing on the investment and development of metaverse real estate, together with <b>Season Studio</b>, a top-class metaverse designing house with 50+ seasoned 3D voxel artists and creators. The Zzoopers is created by all the artists and developers with the dream to free you from any ONE place to the MANY metaverses.
            `,
      open: false,
    },
    {
      heading: "What will mint proceeds be used for?",
      body: "100% of the proceeds will go to MetaOasis DAO. Up to 50% will be used to cover the costs of designing, marketing campaigns and development, and the remaining proceeds will be used for team recruitment, future product development, and the cross-metaverse building. In short, the fund will be used to continuously add values to the IP branding of Zzoopers.",
      open: false,
    },
    {
      heading: `What are the creator's royalties and what will the revenues be used for?`,
      body: "The royalties on the secondary market are 6% of each sale, which will be shared between MetaOasis DAO and Season Studio at a 50/50 ratio. The creators will utilize the royalties to bring continuous surprises to our community.",
      open: false,
    },
    {
      heading: "What is next for Zzoopers?",
      body: "All the things that you can imagine to suit you up on the journeys to the MANY metaverses! ",
      open: false,
    },
    {
      heading: "Is there a discord?",
      body: `
            Yes. <a target="_blank" href="${socialLinks.discord}">${socialLinks.discord}</a>
            `,
      open: false,
    },
  ]);

  const make_active = (faq) => {
    const _faqs = faqs.map((item) => {
      item.open = item.heading === faq.heading;
      return item;
    });
    setFaqs(_faqs);
  };

  return (
    <div className={"faq-container"}>
      <div className="container">
        <p className={"faq-container-text"}>ZZOOPERS</p>
        <p className={"faq-container-heading"}>FAQ</p>
      </div>

      {faqs.map((faq, index) => {
        return (
          <div className={faq.open && "faq-container-active"}>
            <div
              className={"container"}
              style={{ borderBottom: "1px solid #E7E7E1" }}
            >
              <div
                className={"faq-sub-container"}
                onClick={() => {
                  make_active(faq);
                }}
              >
                <div
                  className={clsx(
                    !faq.open
                      ? "index-container-close"
                      : "index-container-open",
                    "index-container"
                  )}
                >
                  {!faq.open ? (
                    <p className={"index-text"}>{index + 1}</p>
                  ) : (
                    <MdOutlineKeyboardArrowDown className={"index-text"} />
                  )}
                </div>
                <div>
                  <p className={"faq-heading"}>{faq.heading}</p>
                  <p
                    className={clsx(
                      !faq.open ? "faq-body-inactive" : "faq-body-active",
                      "faq-body"
                    )}
                    dangerouslySetInnerHTML={{__html: faq.body}}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
