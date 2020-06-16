
import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TournamentStyles.scss';

import Match from '../Matches'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


//import Header from '../Header';
//import API_URL from '../Server';

export default class Group extends React.Component{

    cell(){
        return(
            <Container fluid className="doublecell-container">
                <Container className="cellf-container">
                <Container className="team-shield-cellf">
                    <img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img>
                    <span>Tottenham</span>
                </Container>
                <Container fluid className="score-cellf">
                    <span>1</span>
                </Container>              
            </Container>
            <Container className="cellf-container">
                <Container fluid className="team-shield-cellf">
                    <img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img>
                    <span>Tottenham</span>
                </Container>
                <Container fluid className="score-cellf">
                    <span>1</span>
                </Container>              
            </Container>
            </Container>
            
        )
    }
    
    render() {
        return(
            <Container>
                <Row>
                    <Col className="column-finals" lg={3} md={3}>
                        {this.cell()}
                        {this.cell()}
                        {this.cell()}
                        {this.cell()}
                        {this.cell()}
                        {this.cell()}
                        {this.cell()}
                        {this.cell()}
                    </Col>
                    <Col className="column-finals" lg={3} md={3}>
                        <br></br>
                        {this.cell()}
                        <br></br>
                        <br></br>
                        <br></br>
                        {this.cell()}
                        <br></br>
                        <br></br>
                        <br></br>
                        {this.cell()}
                        <br></br>
                        <br></br>
                        <br></br>
                        {this.cell()}
                    </Col>
                    <Col className="column-finals" lg={3} md={3}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {this.cell()}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {this.cell()}
                    </Col>
                    <Col className="column-finals" lg={3} md={3}>
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
                        {this.cell()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

 