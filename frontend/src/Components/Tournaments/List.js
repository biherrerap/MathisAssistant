
import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TournamentStyles.scss';

import Match from '../Matches'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


//import Header from '../Header';
//import API_URL from '../Server';

export default class Group extends React.Component{

    card(){
        return(
            <div>hello</div>
        )
    }
    
    render() {
        return(
            <Container>
                {this.card()}
            </Container>
        )
    }
}

 