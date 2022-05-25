// import vector from "../../assets/images/Vector.png";
import GoMetaIcon from "../../assets/images/go-metaoasis.svg";
import { socialLinks } from "../../config";
import "./style.scss";

const Create = () => {
  return (
    <div className={"create-container"}>
      <div className="container">
        <p className={"create-container-text"}>Who creates</p>
        <p className={"create-container-header"}>the Zzoopers?</p>

        <p className={"create-container-body"}>
          <b>MetaOasis DAO</b>, one of the first DAOs focusing on the investment
          and development of metaverse assets, together with{" "}
          <b>Season Studio</b>, a top-class metaverse design house with 50+
          seasoned 3D voxel artists and creators.
        </p>

        <p className={"create-container-body"}>
          Zzoopers Genesis is created by a team of artists and developers who
          love animal stories and believe that we should bring diversity,
          inclusion and joyful vibe to the metaverse where everyone can
          celebrate one another for each other's uniqueness.
        </p>

        <a
          target="_blank"
          href={socialLinks.official}
          className="hover-move"
          style={{ display: "block" }}
        >
          <img src={GoMetaIcon} className="go-icon" />
        </a>
        {/* <button className={'btn metaoasis-btn'}>
                     <img src={vector} style={{marginRight: 5}}/>
                     Go to MetaOasis DAO
                 </button> */}
      </div>
    </div>
  );
};

export default Create;
