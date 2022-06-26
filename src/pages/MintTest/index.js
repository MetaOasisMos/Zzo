import MintDetails from "../../Components/MintDetails";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useEffect, useRef, useState } from "react";
// import "./App.scss";

function MintTest() {
  const detailRef = useRef(null);
  // variable that control the header close and open funcationality
  const [openHeader, setOpenHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scroll = (ref) => {
    setOpenHeader(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        openHeader={openHeader}
        setOpenHeader={setOpenHeader}
        scroll={scroll}
        detailRef={detailRef}
      />

      {/* Mint Details Section */}
      <div ref={detailRef}>
        <MintDetails direct={true} />
      </div>

      <Footer />
    </>
  );
}

export default MintTest;
