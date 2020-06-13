import React from 'react';
import '../Styles/HomeStyles.scss';
import Ranking from '../Components/Home/Ranking'
import Navbar from '../Components/Home/Navbar'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { FaBeer } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';


export default class Home extends React.Component{

    render() {
        return(
            <div>
            <Container fluid className="nav-container">
                <Navbar></Navbar>
            </Container>
            <Container fluid  className="home-container">
                <Row>
                    <Col lg={3} md={3}>
                        <Container className="home-menu">
                            <Nav  className="flex-column">
                                <Nav.Item className="menu-item">
                                    <Nav.Link>
                                    <FaBeer/> <span>Home</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/cup" className="menu-item">
                                       <FaBeer/> <span>Tournaments</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="menu-item">
                                        <FaBeer/> Statistics
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>    <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>   
               
                        </Container>
                    </Col>
                    <Col lg={5} md={5}>
                        <Container className="main-home-menu">
                           <Container className="welcome">
                                Hi Brehynner!
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                           </Container>
                         <Container className="table-container">  
                            <Ranking/>
                          </Container>
                         <Container fluid className="central-container">
                            <Container className="statistic-container">
                                Here goes more info
                                <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                            </Container>
                            <Container className="statistic-container sc-right">
                                    Here goes more info
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </Container>   
                         </Container>                
                        </Container>
                    </Col>
                    <Col lg={4} md={4}>
                        <Container className="data-home-menu right-col">
                            <h1>Soon</h1>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

