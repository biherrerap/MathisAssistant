import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TeamStyles.scss';

import Container from 'react-bootstrap/Container';



export default class TeamInfo extends React.Component{ 

    render() {
        return(
            <Container className="team-info">
                <img className="profile-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img>
                <h3>Tottenham Hotspur</h3>
            </Container>
        )
    }
}

