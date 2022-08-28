import React,{useState} from 'react'
import { Link } from 'react-router-dom';    
// import { ethers } from 'ethers';
import contractData from "./dao.json"
import Web3 from 'web3'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



const Header = () => {

  const [myWeb3, setMyWeb] = useState([])
const [wallet, setWallet] = useState("Connect Wallet")

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

    return (
        <>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DAO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/proposal">Proposal</Nav.Link>
            {/* <Nav.Link href="#pricing">Result</Nav.Link> */}
          </Nav>

          <Button variant="success" onClick={() => { connectWallet() }}> {wallet} </Button>
          <Button style={{marginLeft:"10px"}}>loadWeb3</Button>
        </Container>
      </Navbar>
        </>
    )
}
export default Header;