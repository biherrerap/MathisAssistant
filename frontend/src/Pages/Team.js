import React from 'react';
import '../Styles/TeamStyles.scss';
import TournamentList from '../Components/Teams/Tournaments'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


export default class Team extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            storeList:[
                {
                    edition: '1',
                    champion: 'Real Madrid',
                    second: 'Barcelona',
                    placement: 'Semifinals'
                },
                {
                    edition: '2',
                    champion: 'Real Madrid',
                    second: 'Barcelona',
                    placement: 'Semifinals'
                },
                {
                    edition: '3',
                    champion: 'Real Madrid',
                    second: 'Barcelona',
                    placement: 'Semifinals'
                }
            ]
        }
    }

    displayStores(){ 
        return this.state.storeList.map( (item) => {
          return(
            <Col lg={4} md={4} sm={12}>
                <Card style={{ width: '100%',}}>
                    <Container className="card-header">
                          <h1>{item.edition}</h1>
                          <Card.Img className="card-shield" variant="top" src="https://i.pinimg.com/originals/4e/87/0c/4e870c6d61be9306bd9681554b0df83d.png" />
                   </Container>
                            <Container className="tournament-card">
                                <p>Semifinals</p>
                            </Container>
                    </Card>
                </Col>
            )
        })} 

    render() {
        return(
               <Container fluid className="main">
                   <Row>
                    <Col lg={4} md={4} className="col-left">
                        <Container className="container-info-team">
                            <Container className="container-shield-team">
                                <Image className="shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png" roundedCircle />
                                <h1 id="team-name">Tottenham</h1>             
                                <h4>4200</h4>                   
                            </Container>
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
                            <br></br>
                            <br></br>                            
                        </Container>
                    </Col>
                    <Col lg={8} md={8} className="col-right">
                        <Container className="big-container-info-team">
                            <Container className="options-teams">
                                <Button className="options-button">
                                    Torneos
                                </Button>
                                <Button className="options-button">
                                    Partidos
                                </Button>
                            </Container>
                            <Container>
                                <Row>                            
                                {this.displayStores()};                                
                                </Row>
                            </Container>
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
                            <br></br>
                            <br></br>
                        </Container>
                    </Col>
                   </Row>
               </Container>
        )
    }
}
/*
<div class="container-info-team">
<div class="shield centralizer">
    <div class="shield-container">
    </div>
</div>
</div> 

*/