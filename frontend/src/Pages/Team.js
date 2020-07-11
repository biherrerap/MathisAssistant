import React from 'react';

import '../Styles/HomeStyles.scss';

import LeftMenu from '../Components/Home/Menu';
import Navbar from '../Components/Home/Navbar'
import Ranking from '../Components/Home/Ranking'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { BsArrowRight} from 'react-icons/bs';

export default class Teams extends React.Component{ 

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
                            <LeftMenu/>
                            <Container className="statistic-container-left">
                                <h4>More features</h4>
                                <h4 className="h9">Soon <BsArrowRight/></h4>
                            </Container>
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

