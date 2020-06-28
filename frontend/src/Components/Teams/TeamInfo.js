import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TeamStyles.scss';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import {FaTrophy} from 'react-icons/fa';
import {FaCrown} from 'react-icons/fa';
import {FaShieldAlt} from 'react-icons/fa';
import {GiSoccerBall} from 'react-icons/gi';
import {GrFormNext} from 'react-icons/gr';
import {IoMdTrendingUp} from 'react-icons/io';
import{MdLocationOn} from 'react-icons/md';


export default class TeamInfo extends React.Component{ 

    save(){
        return(
            <div>
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
            </div>
        )
    }

    render() {
        return(
            <Container className="team-info">
                <Container className="shield-stats">
                        <img className="profile-shield shield-height" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img>
                    <Container className="upper-stats">
                        <h2>Tottenham Hotspur</h2> 
                        <h5><MdLocationOn/>&nbsp;London, England</h5> 
                        <h5><GiSoccerBall/>&nbsp;Tottenham Hotspur Stadium</h5> 
                    </Container>    
                    <Container className="classColor">
                    </Container>           
                </Container>
                <br></br>
                <h4>Score: 19966</h4>
               <Container>
               <Container className="shield-stats best-participation">            
                    <p>33</p>
                    <p>Champion</p>
                    <p className="profile-shield btn-next"><GrFormNext/></p>
                </Container>
               </Container>
            </Container>
        )
    }
}  
  
