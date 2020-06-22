
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../Styles/HomeStyles.scss';
import '../../Styles/RankingStyles.scss';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import {TiEquals} from 'react-icons/ti';
import {BsDot} from 'react-icons/bs';

import API from '../../server'

//import Header from '../Header';
//import API_URL from '../Server';

export default class Ranking extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            teamList : []
        }
    }


    componentWillMount(){
        this.getTeams();
    }

    getTeams(){
        const axios = require("axios")
        axios.get(API+'/team').then(res => {
            this.setState({teamList : res.data})
        })
    }



    fillTable(){
        return this.state.teamList.map( (item,key) => {
            /*
            if(parseInt(item.position) > 0 && parseInt(item.position) < 9){
                var colorbg = 'green';
            }
            if(parseInt(item.position) > 8 && parseInt(item.position) < 17){
                var colorbg = 'blue';
            }
            if(parseInt(item.position) > 16 && parseInt(item.position) < 25){
                var colorbg = 'purple';
            }
            if(parseInt(item.position) > 24 && parseInt(item.position) < 33){
                var colorbg = 'orange';
            }
            if(parseInt(item.position) > 32){
                var colorbg = 'red';
            }
            */
            return(
                <tr key={key}>
                <td className="pos-col">{key+1}</td>
                <td className="shield-col"><img className="table-shield" src={item.shield}></img></td>
                <td className="team-col">{item.name}</td>
                <td className="prevp-col">{item.score_history}</td>
                <td className="points-col">{item.team_points}</td>
                <td className="change-col"><TiEquals/></td>
                <td className="change-col"><BsDot /></td>
                </tr>
              )
          })
    }
  
    render() {
        return(
            <Table borderless className="home-raking" size="sm sm">
                    <thead>
                        <tr>
                        <th className="pos-col"></th>
                        <th className="shield-col"></th>
                        <th className="team-col">Team</th>
                        <th className="prevp-col">Prev p</th>
                        <th className="points-col">Points</th>
                        <th className="change-col"></th>
                        <th className="change-col"></th>
                        <th className="change-col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fillTable()}
                    </tbody>
                    </Table>
        )
    }
}

