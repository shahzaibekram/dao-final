import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Demo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const Proposal = () => {
    return (
        <div>
            <h1 className="heading">Governance Overview</h1>
            <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">Vote For= <span>1</span></Card.Title>
                                <Card.Text style={{ textAlign: 'center', color: 'black' }}>
                                    <h3 style={{ color: 'black' }}>100%</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">Vote Against= <span>0</span></Card.Title>
                                <Card.Text style={{ textAlign: 'center', color: 'black' }}>
                                    <h3 style={{ color: 'black' }}>0%</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

            <section className="text-gray-600 body-font" style={{marginTop: '90px'}}>
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="">
                        <table className=" bg-gray-100" style={{ width: '100%' }}>
                            <tr>
                                <th className="border text-left px-8 py-4">Address</th>
                                <th className="border text-left px-8 py-4">Vote</th>
                            </tr>
                            <tr>
                                <td className="border px-8 py-4">0x00756eb3f879cb30fe243b4dfee438691c043318585733ff6000526016600af3</td>
                                <td className="border px-8 py-4">Passed</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Proposal;