import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { Web3ContextProvider } from "./context/Web3Context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ContextProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Web3ContextProvider>
    <ToastContainer closeOnClick={false} position="bottom-right" />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
