import React from 'react';
import ReactDOM from 'react-dom';
import { ethers } from "ethers";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getLibrary = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
}

const Web3ReactProviderReloaded = createWeb3ReactRoot("anotherOne");

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ReactProviderReloaded getLibrary={getLibrary}>
      <App />
    </Web3ReactProviderReloaded>
  </Web3ReactProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
