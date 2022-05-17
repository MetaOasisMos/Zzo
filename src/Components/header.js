import { useContext } from "react";
import header_nav from "../assets/images/header-nav.svg";
import close_header from "../assets/images/header-close.svg";
import logo from "../assets/images/logo.svg";
import { Web3Context } from "../context/Web3Context";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = ({
  openHeader,
  setOpenHeader,
  scroll,
  heroRef,
  whyRef,
  meetRef,
  detailRef,
  revealRef,
  mapRef,
  joinUsRef,
  faqRef,
}) => {
  const [displayLinks, setDisplayLinks] = useState(false);

  const { account, connectWallet } = useContext(Web3Context);

  const header_links = [
    { text: "What is Zzoopers?", ref: heroRef },
    { text: "Why Zzoopers?", ref: whyRef },
    { text: "Meet 5555 Zzoopers", ref: meetRef },
    { text: "Mint Details", ref: detailRef },
    { text: "When to reveal?", ref: revealRef },
    { text: "Roadmap", ref: mapRef },
    { text: "Join us", ref: joinUsRef },
    { text: "FAQ", ref: faqRef },
  ];

  useEffect(() => {
    if (!openHeader) {
      setDisplayLinks(false);
    } else {
      setTimeout(() => {
        setDisplayLinks(true);
      }, 500);
    }
  }, [openHeader]);

  return (
    <>
      <div className={"header"}>
        <div className="container">
          <div style={{ width: "100%", display: "flex" }}>
            {!openHeader ? (
              <img
                onClick={() => {
                  setOpenHeader(!openHeader);
                }}
                src={header_nav}
                className={"header-btn"}
              />
            ) : (
              <img
                onClick={() => {
                  setOpenHeader(!openHeader);
                }}
                src={close_header}
                className={"header-btn"}
              />
            )}
            <img src={logo} style={{ marginLeft: "24px", width: 50 }} />

            <button className={"btn metaoasis-header-btn"}>
              Back to MetaOasis DAO
            </button>
            {account ? (
              <button className={"btn connect-header-btn"}>
                {account.slice(0, 4)}...{account.slice(-4)}
              </button>
            ) : (
              <button className={"btn connect-header-btn"}>Connect</button>
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "header-body",
          !openHeader ? "header-body-close" : "header-body-open"
        )}
      >
        <div className="container" style={{ height: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {displayLinks &&
              header_links.map((link) => {
                return (
                  <p
                    className={"header-link"}
                    onClick={() => {
                      scroll(link.ref);
                    }}
                  >
                    {link.text}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
