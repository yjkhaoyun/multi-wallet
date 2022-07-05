import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import * as MultiBlockchainWallet from "multi-blockchain-wallet";

const wallets = MultiBlockchainWallet.generateMulti();
console.log(wallets);
function App() {
  return (
    <div className="App">
      <h1>Wallets</h1>
      <h3>Refresh the page to generate a new wallet</h3>

      <img
        width="400"
        src="https://ih1.redbubble.net/image.441644868.8502/flat,1000x1000,075,f.jpg"
      />

      {wallets.map(wallet => {
        return (
          <div>
            <div>
              <b>Type:</b> {wallet.type}
            </div>
            <br />
            <div>
              <b>Mnemonic:</b> {wallet.mnemonic}
            </div>
            <br />
            <div>
              <b>Address:</b> {wallet.address}
            </div>
            <br />
            <div>
              <b>Public Key:</b> {wallet.keyPair.publicKey}
            </div>
            <br />
            <div>
              <b>Private Key:</b> {wallet.keyPair.privateKey}
            </div>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
