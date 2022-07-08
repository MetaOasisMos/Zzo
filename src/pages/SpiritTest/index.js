// import Header from "../../Components/Header";
// import Footer from "../../Components/Footer";
import { useEffect, useState, useContext } from "react";
import IconUnknown from "../../assets/images/spirit/unknown.gif";

import Countdown from "../../Components/SpiritCountdown";
import { useLocation } from "react-router-dom";
// import IconAvatar from "../../assets/images/spirit/avatar.png";
import IconMetaoasis from "../../assets/images/spirit/metaoasis.svg";
import IconWalkingTiger from "../../assets/images/spirit/walking-tiger.gif";
import IconKucoin from "../../assets/images/spirit/kucoin.svg";
import IconCopied from "../../assets/images/copied-icon.svg";
import { Web3Context } from "../../context/Web3Context";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { animalsMapping } from "../../config";
import { getAnimal } from "../../lib/graph";

import clsx from "clsx";

import Icon0 from "../../assets/images/spirit/animals/0.png";
import Icon1 from "../../assets/images/spirit/animals/1.png";
import Icon2 from "../../assets/images/spirit/animals/2.png";
import Icon3 from "../../assets/images/spirit/animals/3.png";
import Icon4 from "../../assets/images/spirit/animals/4.png";
import Icon5 from "../../assets/images/spirit/animals/5.png";
import Icon6 from "../../assets/images/spirit/animals/6.png";
import Icon7 from "../../assets/images/spirit/animals/7.png";
import Icon8 from "../../assets/images/spirit/animals/8.png";
import Icon9 from "../../assets/images/spirit/animals/9.png";

import config from "../../config";
import "./style.scss";

const invitesMapping = {
  Cheetah: {
    icon: Icon0,
    count: 0,
  },

  Deer: {
    icon: Icon1,
    count: 0,
  },

  Elephant: {
    icon: Icon2,
    count: 0,
  },

  Fox: {
    icon: Icon3,
    count: 0,
  },

  Monkey: {
    icon: Icon4,
    count: 0,
  },

  Panda: {
    icon: Icon5,
    count: 0,
  },

  Penguin: {
    icon: Icon6,
    count: 0,
  },

  Rabbit: {
    icon: Icon7,
    count: 0,
  },

  Tiger: {
    icon: Icon8,
    count: 0,
  },

  Unicorn: {
    icon: Icon9,
    count: 0,
  },
};

// https://u7x7ubqmf7.larksuite.com/docx/doxus1f9Lqxyuo9VRaOc1i4hDUb

export default function Spirit() {
  const location = useLocation();
  const { account, connectWallet, web3 } = useContext(Web3Context);
  const [step, setStep] = useState(0);
  const [qualified, setQualified] = useState(false);
  const [animal, setAnimal] = useState("");
  const [inviter, setInviter] = useState("");
  const [myInviterId, setMyInviterId] = useState("");
  // const [ruleModalVisible, setRuleModalVisible] = useState(false);
  const [copyModalVisible, setCopyModalVisible] = useState(false);
  const [invitationList, setInvitationList] = useState([]);
  const [invitedMapping, setInvitedMapping] = useState(invitesMapping);
  // const [collectionList, setcollectionList] = useState([])

  const doCopy = () => {
    const copied = document.createElement("input");
    copied.setAttribute(
      "value",
      `A quick TEST designed by MetaOasis DAO and KuCoin to help meet your Spirit Animal in the Web3 world! JOIN now and WIN the 0.1 ETH MINT rebate! https://www.zzoopers.xyz/spirit?src=${myInviterId}`
    );
    document.body.appendChild(copied);
    copied.select();
    document.execCommand("copy");
    document.body.removeChild(copied);

    setCopyModalVisible(true);
  };

  const saveResult = async (signature) => {
    let params = {
      owner: account,
      ownerSig: signature,
    };
    if (inviter) {
      params.inviterId = inviter;
    }
    await axios.post(`${config.spiritRelationApi}/metaoasismos/api/v1`, {
      jsonrpc: "2.0",
      method: "newZzoopersAnimal",
      params,
      id: 1,
    });
    getMyId();
  };

  const doAnalyze = async () => {
    const msgParams = JSON.stringify({
      domain: {
        name: "ZzoopersAnimal",
      },
      message: {
        message: `Please sign below to let us verify that you are the owner of this address: ${String(
          account
        ).toLowerCase()}. This will NOT cost you any gas fees and your private key will NOT be exposed in any means.`,
      },
      primaryType: "Owner",
      types: {
        Owner: [
          {
            name: "message",
            type: "string",
          },
        ],
        EIP712Domain: [{ name: "name", type: "string" }],
      },
    });
    await web3.currentProvider.sendAsync(
      {
        method: "eth_signTypedData_v4",
        params: [account, msgParams],
        from: account,
      },
      async (err, result) => {
        if (err) {
          console.dir(err);
          return;
        }
        if (result.error) {
          console.log(result.error.message);
          return;
        }
        const signature = result.result;
        console.log("Signature is", signature);

        setStep(1);
        setAnimal(await getAnimal(account));
        setStep(2);
        saveResult(signature);
      }
    );
  };

  const getReference = () => {
    const src = new URLSearchParams(location.search).get("src");
    console.log("reference inviter id:", src);
    setInviter(src);
  };

  const getInvitations = async () => {
    const res = await axios.post(
      `${config.spiritRelationApi}/metaoasismos/api/v1`,
      {
        jsonrpc: "2.0",
        method: "getZzoopersAnimalInviteResult",
        params: {
          owner: account,
          page: {
            pageNo: 0,
            size: 200000,
          },
        },
        id: 1,
      }
    );
    console.log("resssss", res);
    setInvitationList(res.data.result.data);
    res.data.result.animals.forEach((item) => {
      setInvitedMapping((prev) => {
        console.log("prev", prev);
        prev[item.animal].count = item.count;
        return prev;
      });
    });
  };

  const getWinnerList = async () => {
    const res = await axios.post(
      `${config.spiritRelationApi}/metaoasismos/api/v1`,
      {
        jsonrpc: "2.0",
        method: "getZzoopersInviteWinners",
        params: "",
        id: 1,
      }
    );
    const winnerList = res.data.result.map((item) => item.owner);

    if (winnerList.indexOf(account) > -1) {
      setQualified(true);
    }
  };

  const getMyId = async () => {
    const res = await axios.post(
      `${config.spiritRelationApi}/metaoasismos/api/v1`,
      {
        jsonrpc: "2.0",
        method: "getZzoopersAnimal",
        params: account,
        id: 1,
      }
    );
    console.log("my id", res.data);
    if (res.data.result) {
      setMyInviterId(res.data.result.inviterId);
    }
  };

  useEffect(() => {
    getReference();
  }, []);

  useEffect(() => {
    if (!account) {
      return;
    }
    getInvitations();
    getWinnerList();
  }, [account]);

  return (
    <div>
      {/* <Header logoOnly={true} /> */}
      <div className="spirit-page">
        {step === 0 && (
          <div className="safe-area area-first">
            <img src={IconUnknown} className="icon-unknown" />

            <div className="sponsors">
              <a href={config.socialLinks.official} target="_blank">
                <img src={IconMetaoasis} />
              </a>
              <a href={config.socialLinks.kucoin} target="_blank">
                <img src={IconKucoin} />
              </a>
            </div>

            <div className="spirit-title">
              {web3 && web3.eth ? 'web3 eth yes': 'web3 eth no'}<br/>
              {window.ethereum ? 'ethereum yes' : 'ethereum no'}<br/>
              {window.isBitKeep ? 'isBitkeep yes': 'isBitkeep no'}<br/>
              {account? 'account' + account : 'no accounts'}
              {/* {window && JSON.stringify(window.ethereum)} */}
            </div>
            <div className="spirit-desc">
              Spirit animal refers to a spirit which helps guide or protect a
              person on a journey and whose characteristics that person shares
              or embodies. It is also metaphor, often humorous, for someone or
              something a person relates to or admires.
            </div>
            {account ? (
              <a className="btn-yellow btn-discover" onClick={doAnalyze}>
                Discover Now
              </a>
            ) : (
              <a className="btn-yellow btn-discover" onClick={connectWallet}>
                Connect Wallet
              </a>
            )}

            <div className="connect-hint">
              *The test requires your authorization to have the on-chain
              records. Connect the wallet and make the signature to meet your
              spirit animal in Web3.
            </div>
          </div>
        )}

        {step === 1 && (
          <>
            <div className="safe-area">
              <div className="zzoopers-title">Zzoopers</div>
              <img src={IconWalkingTiger} className="walking-tiger" />
              <div className="analysing-title">Analysing...</div>
              <div className="analysing-desc">
                You're not ready yet. Maybe you should meditate first.
              </div>
            </div>
            <div className="barrage-area">
              <div className="barrage-item item-1">
                <div className="barrage-tip">
                  "What's your favorite natural element?"
                </div>
              </div>
              <div className="barrage-item item-2">
                <div className="barrage-tip">
                  "When you bought your first NFT?"
                </div>
              </div>
              <div className="barrage-item item-3">
                <div className="barrage-tip">
                  "Which community did you join first in the metaverse?"
                </div>
              </div>
              <div className="barrage-item item-4">
                <div className="barrage-tip">
                  "What was the last project you were introduced to by a
                  friend?"
                </div>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="step-2">
            <div className="safe-area">
              <img src={`/animals/${animal}.png`} className="result-avatar" />
              <div className="result-title">
                You are the {animal} in Web 3.0
              </div>
              <div className="result-desc">
                <div
                  dangerouslySetInnerHTML={{
                    __html: animalsMapping[animal].desc1,
                  }}
                />
                <div
                  className="highlight"
                  dangerouslySetInnerHTML={{
                    __html: animalsMapping[animal].desc2,
                  }}
                />
              </div>

              <div className="countdown-wrapper">
                <div className="title">
                  KuCoin NFT Marketplace
                  <br />
                  Windvane's first NFT Launchpad project
                </div>
                <div className="desc">"Zzoopers Genesis" Coming Soon</div>

                <Countdown
                  endTime={1657623600}
                  // onComplete={() => setPhase2Started(true)}
                />

                <a href="/" className="btn-view-more" target="_blank">
                  View more
                </a>
              </div>
            </div>

            <div className="free-chance">
              <div className="safe-area">
                {qualified ? (
                  <>
                    <div className="qualified-title">
                      Congrats!
                      <br /> You have successfully collected 10 different spirit
                      animals!
                    </div>
                    <div className="free-chance-desc">
                      JOIN our <span className="highlight">Discord</span> and
                      follow the{" "}
                      <span className="highlight">#Announcement</span> channel
                      to check out the limited allowlists! Only 50 allowlists of
                      0.1 ETH MINT rebate available. First come, first served.
                      May you're one of the lucky ones!
                    </div>
                  </>
                ) : (
                  <>
                    <div className="free-chance-title">
                      Complete either Quest and Earn 0.1 ETH MINT Rebate
                    </div>

                    <div className="free-chance-desc">
                      <span className="highlight">
                        Quest 1: Complete the PREMINT tasks and join the Raffle.
                      </span>{" "}
                      50 Raffle winners can get the limited allowlists of 0.1
                      ETH MINT rebate.
                      <br />
                      <span className="highlight">
                        Quest 2: Together with your friends to collect 10
                        different spirit animals
                      </span>{" "}
                      and you can get mint rebate. Only 50 allowlists of 0.1 ETH
                      MINT rebate available. First come, first served.
                      <br />
                      *Each participant only has one chance to get allowlisted.
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="safe-area">
              {!qualified && (
                <div>
                  <div className="actions-line">
                    <a
                      className="btn-black"
                      href={config.socialLinks.premint}
                      target="_blank"
                    >
                      Quest 1: Join PREMINT
                    </a>
                    <a className="btn-yellow" onClick={doCopy}>
                      Quest 2: Invite friends
                    </a>
                  </div>
                  <div className="quest-hint">
                    Complete either Quest to get allowlisted.
                  </div>
                </div>
              )}

              <div className="my-collections">
                <div className="section-title">My collection</div>
                <div className="collection-list">
                  {Object.keys(invitedMapping).map((key) => (
                    <div className="collection-item-wrapper" key={key}>
                      <div
                        className={clsx(
                          "collection-item",
                          !invitedMapping[key].count && "empty"
                          // !item.num && "empty"
                        )}
                      >
                        <img src={invitedMapping[key].icon} />
                        {invitedMapping[key].count ? (
                          <div className="num">{invitedMapping[key].count}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-invitations">
                <div className="section-title">My invitations</div>
                {invitationList.length === 0 && <div>No invitations yet.</div>}
                <div className="invitation-list">
                  {invitationList.map((item) => (
                    <div className="invitation-item" key={item.owner}>
                      <div>
                        <div className="address">
                          {item.owner.slice(0, 4)}...{item.owner.slice(-4)}
                        </div>
                        <div className="date">
                          {new Date(item.createAt).toLocaleDateString()}
                        </div>
                      </div>
                      <img
                        src={`/animals/${item.animal}.png`}
                        className="icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <Footer /> */}

      {copyModalVisible && (
        <Modal open={true} onClose={() => setCopyModalVisible(false)}>
          <div className={"modal-body copy-modal"}>
            <img src={IconCopied} className="icon-copied" />
            <div className="title">The invitation link has been copied</div>
            <div className="desc">
              Share your exclusive link to collect 10 different spirit animals
              together with your friends! Good luck!
              {/* Share your exclusive link to{" "}
              <strong>collect 10 different spirit animals</strong> together with
              your frens! Good Luck! */}
            </div>
            <a
              className="btn-yellow"
              onClick={() => setCopyModalVisible(false)}
            >
              Get
            </a>
          </div>
        </Modal>
      )}

      {/* {ruleModalVisible && (
        <Modal open={true} onClose={() => setRuleModalVisible(false)}>
          <div className={"modal-body rule-modal"}>
            <div className="title">Rules</div>
            <div className="rule-item">
              <div className="rule-title">Rule 1</div>
              <div className="rule-desc">
                Please send the link to your friends to get free mint!!! Please
                send the link to your friends to get free mint!!! Please send
                the link to your friends to get free mint!!!
              </div>
            </div>
            <div className="rule-item">
              <div className="rule-title">Rule 1</div>
              <div className="rule-desc">
                Please send the link to your friends to get free mint!!! Please
                send the link to your friends to get free mint!!! Please send
                the link to your friends to get free mint!!!
              </div>
            </div>
            <a
              className="btn-yellow"
              onClick={() => setRuleModalVisible(false)}
            >
              Get
            </a>
          </div>
        </Modal>
      )} */}
    </div>
  );
}
