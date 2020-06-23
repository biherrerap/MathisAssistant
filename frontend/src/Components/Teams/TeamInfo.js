import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TeamStyles.scss';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import {FaTrophy} from 'react-icons/fa';
import {IoMdTrendingUp} from 'react-icons/io';
import {FaCrown} from 'react-icons/fa'

export default class TeamInfo extends React.Component{ 

    render() {
        return(
            <Container className="team-info">
                <Card className="team-info-card">
                <h3>Tottenham</h3>
                <Container className="team-img-container">
                    <img className="profile-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img>
                </Container>
                <Container className="team-prof-stats">
                <Table borderless className="home-raking" size="sm sm">
                    <thead>
                        <tr>
                        <th><IoMdTrendingUp/></th>
                        <th><FaCrown/></th>
                        <th><FaTrophy/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>51660</td>
                            <td>18</td>
                        </tr>
                    </tbody>
                    </Table>
                </Container>
                </Card>
            </Container>
        )
    }
}  
  
