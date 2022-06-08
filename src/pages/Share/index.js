import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import "./style.scss";

export default function Share() {
  const title =
    "I just marry in web3 with my lover, and mint Paired Soubound Marry3 Certificate";
  const url = "https://marr3.love/i/37";
  return (
    <div>
      <Header logoOnly={true} />
      <div className="container">
        <div className="share-page">
          <TwitterShareButton
            url={url}
            title={title}
            via="marryinweb3"
            related={["marryinweb3"]}
            hashtags={["marry3"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TelegramShareButton title={title} url={url}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <RedditShareButton title={title} url={url}>
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
      </div>

      <Footer />
    </div>
  );
}
