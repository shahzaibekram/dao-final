
import './App.css';
import { useState } from 'react';
import Web3 from 'web3';
import contractData from "./erc20.json"


function App() {
  const [myWeb3, setMyWeb]= useState([])
  const [wallet, setWallet]= useState("Connect Wallet")

  const connectWallet = async () => {
    if (window.ethereum) {
      const myWeb3 = await new Web3(window.ethereum)
      console.log(myWeb3);
      await window.ethereum.enable()
      .then((a) => {
        console.log(a);
        setMyWeb(myWeb3)
        setWallet(a[0])
      })
      .catch(e => {
        console.log(e);
      })
    } else {
      alert("Install Metamask")
    }
  }

  async function loadWeb3() {
    const myContract =  await new myWeb3.eth.Contract(contractData.abi, contractData.address)
    console.log(myContract);
    console.log("wallet", wallet);

    console.log(await myContract.methods.totalSupply().call());
    console.log(await myContract.methods.balanceOf("0x8Fab43b8152B854ac501A4Cc5e539a64d9f88375").call(), "0x8Fab43b8152B854ac501A4Cc5e539a64d9f88375");
    console.log(await myContract.methods.balanceOf("0xce19f9c5352501cd560e55578f4c54a099cf6ded").call(), "0xce19f9c5352501cd560e55578f4c54a099cf6ded");
    console.log(await myContract.methods.transfer("0x8Fab43b8152B854ac501A4Cc5e539a64d9f88375", "100000000000000000000000")
    .send({from: wallet}))
    .then( res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    })
  }


  // 94000000000000000000000 0x8Fab43b8152B854ac501A4Cc5e539a64d9f88375
  return (
    <div className="">
      <button type='button' onClick={()=>{connectWallet()}}> {wallet} </button>
      <button type='button' onClick={()=>{loadWeb3()}}> loadWeb3 </button>
    
    </div>
  );
}

export default App;
