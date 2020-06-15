import React from 'react';
import '../Styles/HomeStyles.scss';
import '../Styles/MatchesStyles.scss';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
//import Header from '../Header';
//import API_URL from '../Server';

export default class Matches extends React.Component{

    loadAllshit(){
        return(
            <ListGroup variant="flush"> 
            <ListGroup.Item>
                <Container className="match-container">
                    <img src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png" className="shield-img"></img>
                    <span className="team-span">Tottenham</span>
                    <span className="result-team">1</span>
                    <span>:</span>
                    <span className="result-team">0</span>
                    <span className="team-span">Barcelona</span>
                    <img src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png" className="shield-img"></img>
                </Container>
            </ListGroup.Item>
        </ListGroup>
        )
    }

    render() {
        return(
             <Table borderless className="home-raking" size="sm sm">
             <thead>
                 <tr>
                 <th className="pos-col´-group"></th>
                 <th className="shield-col-group"></th>
                 <th className="team-col-group"></th>
                 <th className="change-col-group"></th>
                 <th className="change-col-group"></th>
                 <th className="change-col-group"></th>
                 <th className="team-col-group"></th>
                 <th className="shield-col-group-rmatch"></th>
                 <th className="pos-col´-group"></th>
                 </tr>
             </thead>
             <tbody>
             <tr>
                 <td className="pos-col-group"></td>
                 <td className="shield-col-group"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                 <td className="team-col-group">Tottenham</td>
                 <td className="change-col-group">3</td>
                 <td className="change-col-group">:</td>
                 <td className="change-col-group">0</td>
                 <td className="team-col-group-rmatch">Tottenham</td>
                 <td className="shield-col-group"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                 <td className="pos-col-group"></td>
             </tr>
             </tbody>
          </Table>
        )
    }
}

