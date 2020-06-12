import React from 'react';
import '../Styles/TeamStyles.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default class Team extends React.Component{

    render() {
        return(
               <Container fluid className="main">
                   <Row>
                    <Col lg={4} md={4} className="col-left">
                        <Container className="container-info-team">
                            <a>Hola</a>
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