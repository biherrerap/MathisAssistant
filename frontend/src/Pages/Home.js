import React from 'react';

import '../Styles/HomeStyles.scss';

import LeftMenu from '../Components/Home/Menu';
import Matches from '../Components/Tournaments/MatchesCup'
import Navbar from '../Components/Home/Navbar'
import Groups from '../Components/Tournaments/ShowGroups'
import Ranking from '../Components/Home/Ranking'
import TeamInfo from '../Components/Teams/TeamInfo'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { BsArrowRight} from 'react-icons/bs';

import API from '../server';

export default class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            showTeamInfo: false
        }
    }

    activateTeamInfo = () => {
        console.log('activate', this.state.showTeamInfo)
        this.setState({
            showTeamInfo: !this.state.showTeamInfo,
        })
        console.log('activated', this.state.showTeamInfo)
    }

    getTeams(){
        const axios = require("axios")
        axios.get(API+'/team').then(res => {
        })  
    }

    componentDidMount(){
        this.getTeams();
    }

    landingHomeCenter(){
        return(
                <Container className="main-home-menu">
                    <Container className="welcome">
                         Hi Brehynner!
                    </Container>
                    <Container className="table-container">  
                        {this.showRanking()}
                    </Container>
                    <Container fluid className="central-container">
                        <Container className="statistic-container">
                            Here goes more info                                
                        </Container>
                        <Container className="statistic-container sc-right">
                            Here goes more info  
                        </Container>   
                    </Container>                
                </Container>
        )
    }

    tournamentGroups(){
        return(
            <Groups/>
        )
    }

    tournamentGroupMatches(){
        return(
            <Matches/>
        )
    }

    showRanking(){
        return(
            <Ranking/>
        )
    }

    teamInfo(){
        console.log(this.state.showTeamInfo)
        return(
            <div>
                 {this.state.showTeamInfo ? <TeamInfo/> : null}
            </div>
        )
    }



    render() {  

        return(
            <div>
        <Button onClick={this.activateTeamInfo}>Botón de prueba</Button>
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
                    <Col lg={5} md={5}>
                        {this.landingHomeCenter()}
                    </Col>
                    <Col lg={4} md={4}>
                        <Container className="data-home-menu right-col">
                            {this.teamInfo()}
                        </Container>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

