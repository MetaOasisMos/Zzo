import { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Banner from "./comp/Banner";
import Rules from "./comp/Rules";
import BlindBoxes from "./comp/BlindBoxes";
import "./style.scss";

export default () => {
  const [openHeader, setOpenHeader] = useState(false);
  const scroll = (ref) => {
    setOpenHeader(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="page-reveal">
      <Header
        openHeader={openHeader}
        setOpenHeader={setOpenHeader}
        scroll={scroll}
      />
      <Banner />
      <BlindBoxes />
      <Rules />

      <Footer />
    </div>
  );
};
