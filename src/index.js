import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Web3ContextProvider } from "./context/Web3Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import App from "./App";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
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
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
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
