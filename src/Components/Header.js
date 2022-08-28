import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { ethers } from 'ethers';
import contractData from "./dao.json"
import Web3 from 'web3'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Pages/Demo.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Demo from '../Pages/Demo'
import Proposal from '../Pages/Proposal';



// import Sonnet from '../../components/Sonnet';


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
      <Navbar className='Navbar'>
        <Container>
          <Navbar.Brand href="/" style={{color: 'white', fontSize:'1.5em'}}>DAO</Navbar.Brand>
          <Nav className="me-auto">
        {/* <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/proposal">Proposal</Nav.Link> */}
          </Nav>

          <Button variant="success" onClick={() => { connectWallet() }}> {wallet} </Button>
          <Button style={{ marginLeft: "10px" }}>loadWeb3</Button>
        </Container>
      </Navbar>

      <Tabs style={{ justifyContent: 'center', margin: 'auto', marginTop: '10px'}}
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Demo />
        </Tab>
        <Tab eventKey="proposal" title="Proposal">
          <Proposal />
        </Tab>
      </Tabs>

    </>
  )
}
export default Header;