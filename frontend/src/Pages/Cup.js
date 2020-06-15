import React,{useState} from 'react';
import '../Styles/HomeStyles.scss';
import '../Styles/TournamentStyles.scss';
import Group from '../Components/Tournaments/Group'
import Finals from '../Components/Tournaments/Finals'
import Navbar from '../Components/Home/Navbar'
import Match from '../Components/Matches'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { BsArrowRight} from 'react-icons/bs';
import LeftMenu from '../Components/Home/Menu';


export default class Home extends React.Component{


    saveStuff(){
        return(
            <div>
                <Col lg={5} md={5}>
                        <Container className="main-home-menu">
                            <Container className="main-menu-cup">
                                    <h4 className="group-title">Group A</h4>
                                    <Container className="table-container-group">  
                                        <Group/>
                                    </Container>      
                                    <h4 className="group-title">Group B</h4>
                                    <Container className="table-container-group">  
                                        <Group/>
                                    </Container>    
                                    <h4 className="group-title">Group C</h4>
                                    <Container className="table-container-group">  
                                        <Group/>
                                    </Container>    
                                    <h4 className="group-title">Group D</h4>
                                    <Container className="table-container-group">  
                                        <Group/>
                                    </Container>        
                            </Container>                           
                        </Container>
                    </Col>
                    <Col lg={4} md={4}>
                        <Container className="data-home-menu right-col">
                            <Match/>
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
            </div>
        )
    }


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
                                <h9>Soon <BsArrowRight/></h9>
                            </Container>
                        </Container>
                    </Col>
                    <Col lg={8} md={8}>
                        <Container className="tournament-big">
                            <Finals/>
                        </Container>
                     </Col>
            </Row>  
            </Container>
            </div>
        )
    }
}

