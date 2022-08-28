import React from "react";
import './Demo.css'
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const Demo = () => {
    return (<div className="base">
        <div className="heading">
            Governence Overview
        </div>
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">Proposal Created</Card.Title>
                                <Card.Text style={{ textAlign: 'center', color: 'black' }}>
                                    <h3 style={{ color: 'black' }}>50</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">Eligible Voters</Card.Title>
                                <Card.Text style={{ textAlign: 'center', color: 'black' }}>
                                    <h3 style={{ color: 'black' }}>50</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">Ongoing Proposal</Card.Title>
                                <Card.Text style={{ textAlign: 'center', color: 'black' }}>
                                    <h3 style={{ color: 'black' }}>50</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="recent" style={{ textAlign: 'center' }}>
            <h1 className="heading">Recent Proposal </h1>
        </div>
        <Container>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Should we start a moralis project</td>
                        <td>Passed</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Should we start a moralis project</td>
                        <td>Passed</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Should we start a moralis project</td>
                        <td>Passed</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    </div>)
}
export default Demo;