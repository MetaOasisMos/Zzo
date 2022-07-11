import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Web3ContextProvider } from "./context/Web3Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import App from "./App";
import MintTest from "./pages/MintTest";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Share from "./pages/Share";
import Spirit from "./pages/Spirit";
import SpiritTest from "./pages/SpiritTest";
import SpiritPreview from "./pages/SpiritPreview";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ContextProvider>
      <ParallaxProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/s3">
              <Redirect to="/" />
            </Route>
            <Route path="/mint-test" exact component={MintTest} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/share" component={Share} />
            <Route path="/spirit" component={Spirit} />
            <Route path="/spirit-test" component={SpiritTest} />
            <Route path="/spirit-preview" component={SpiritPreview} />
          </Switch>
        </Router>
        {/* <App /> */}
      </ParallaxProvider>
    </Web3ContextProvider>
    <ToastContainer closeOnClick={false} position="bottom-right" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
