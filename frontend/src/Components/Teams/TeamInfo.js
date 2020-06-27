import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TeamStyles.scss';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import {FaTrophy} from 'react-icons/fa';
import {IoMdTrendingUp} from 'react-icons/io';
import {FaCrown} from 'react-icons/fa'
import {GiPlainCircle} from 'react-icons/gi'


export default class TeamInfo extends React.Component{ 

    render() {
        return(
            <Container className="team-info">
                <Container className="upper-part up-shield">
                <Container className="neumorphic variation2">
                    <img className="profile-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img>
                </Container>                
                </Container>
                <Container className="upper-part">
                    <h2>19982</h2> 
                </Container>
                <Container className="stats-section"> 
                    <Container className="neumorphic variation2 full-width-stats">
                        1
                    </Container>
                </Container>
                <Container className="stats-section"> 
                    <Container className="neumorphic variation2 circle-stats">
                        1
                    </Container>
                    <Container className="neumorphic variation2 circle-stats">
                        12533
                    </Container>
                    <Container className="neumorphic variation2 circle-stats">
                        <img className="profile-shield" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_England.PNG"></img>
                    </Container>
                </Container>
            </Container>
        )
    }
}  
  
