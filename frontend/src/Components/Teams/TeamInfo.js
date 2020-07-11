import React from 'react';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TeamStyles.scss';

import Container from 'react-bootstrap/Container';


import {GiSoccerBall} from 'react-icons/gi';
import {GrFormNext} from 'react-icons/gr';
import{MdLocationOn} from 'react-icons/md';

import API from '../../server';

export default class TeamInfo extends React.Component{
    
    constructor(props) {
        super(props);
     
        this.state = {
          isShow: true,
          team: []
        };
        this.getTeam();
      }    

 

    getTeam(){
        const axios = require("axios");
        const team_id = this.props.id;
        axios.get(API+'/team/'+ team_id).then(res => {
            this.setState({team : res.data})
            //console.log('inside teaminfo... ' + this.state.location.city);
        })
    }

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
                        <img alt="shield-teaminfo" className="profile-shield" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_England.PNG"></img>
                    </Container>
             </Container>
            </div>
        )
    }

    render() {
        return(
            <Container className="team-info">
                <Container className="shield-stats">
                        <img alt="shield-teaminfo"  className="profile-shield shield-height" src={this.state.team.shield}></img>
                    <Container className="upper-stats">
                        <h2>{this.state.team.name}</h2> 
                        <h5><MdLocationOn/>&nbsp;{typeof this.state.team.location !== "undefined"  && typeof this.state.team.location.city !== "undefined" && this.state.team.location.city}, {typeof this.state.team.location !== "undefined"  && typeof this.state.team.location.country !== "undefined" && this.state.team.location.country.toLowerCase()}</h5> 
                        <h5><GiSoccerBall/>&nbsp;Tottenham Hotspur Stadium</h5> 
                    </Container>    
                    <Container className="classColor">
                    </Container>           
                </Container>
                <br></br>
                <br></br>
                <h4>Score: {this.state.team.score}</h4>
                <br></br>
                <Container className="shield-stats best-participation table-info">   
                       <Container className="table-teaminfo">
                          <p>G</p>
                          <p>E</p>
                          <p>P</p>
                          <p>GF</p>
                          <p>GC</p>
                          <p>Pts</p>
                       </Container>
                       <Container className="table-teaminfo">
                          <p>8</p>
                          <p>3</p>
                          <p>5</p>
                          <p>32</p>
                          <p>11</p>
                          <p>27</p>
                       </Container>
                </Container>
                <br></br>
                    <p className="to-center">Best participation</p>         
                <Container className="shield-stats best-participation">   
                        <p>33</p>
                        <p>Champion</p>
                        <p className="profile-shield btn-next"><GrFormNext/></p>
                </Container>
                <br></br>
                <p className="to-center">Compete against</p>         
                <Container className="shield-stats best-participation">   
                        <p>12</p>
                        <p>Barcelona</p>
                        <p className="profile-shield btn-next"><GrFormNext/></p>
                </Container>
            </Container>
        )
    }
}  
  
