import React from 'react';
import '../Styles/HomeStyles.scss';
import Navbar from '../Components/Home/Navbar'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { FaBeer } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

export default class Home extends React.Component{

    render() {
        return(
            <Container fluid className="nav-container">
                <Navbar></Navbar>
                <Row>
                    <Col>
                        Let's go for a <FaBeer/>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>

            </Container>
        )
    }
}

