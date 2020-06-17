import React from 'react';

import Container from 'react-bootstrap/Container';

import '../../Styles/HomeStyles.scss';
import '../../Styles/TournamentStyles.scss';

import Group from './Group';

export default class ShowGroups extends React.Component{
    render(){
        return(
                <Container className="main-home-menu">
                        <Container className="main-menu-cup">
                            <h4 className="group-title">Group A</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>      
                            <h4 className="group-title">Group B</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>    
                            <h4 className="group-title">Group C</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>    
                            <h4 className="group-title">Group D</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container> 
                            <h4 className="group-title">Group E</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>      
                            <h4 className="group-title">Group F</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>    
                            <h4 className="group-title">Group G</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>    
                            <h4 className="group-title">Group H</h4>
                            <Container className="table-container-group">  
                                <Group/>
                            </Container>         
                        </Container>                           
                </Container>
        )    
    }
}