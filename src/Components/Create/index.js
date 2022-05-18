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
          and development of metaverse real estate, together with{" "}
          <b>Season Studio</b>, a top-class metaverse designing house with 50+
          seasoned 3D voxel artists and creators.
        </p>

        <p className={"create-container-body"}>
          Zzoopers Genesis is created by all the artists and developers with the
          dream to free you from any ONE place to the MANY metaverses.
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
