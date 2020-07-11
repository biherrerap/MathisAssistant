
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import '../../Styles/HomeStyles.scss';
import '../../Styles/RankingStyles.scss';

import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import {TiEquals} from 'react-icons/ti';
import {BsDot} from 'react-icons/bs';

import API from '../../server';

export default class Ranking extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            teamList : []
        }
        this.getTeams();
    }

    getTeams(){
        const axios = require("axios")
        axios.get(API+'/team').then(res => {
            this.setState({teamList : res.data})
        })
    }

    organizeRanking(dict){
        console.log(dict)
    }

    fillTable(){
        var change_icon = <AiFillCaretUp/>;
        var colorbg;
        return this.state.teamList.map( (item,key) => {
            if(parseInt(item.key) > 0 && parseInt(item.key) < 9){
               colorbg = 'green';
            }
            if(parseInt(item.key) > 8 && parseInt(item.key) < 17){
                colorbg = 'blue';
            }
            if(parseInt(item.key) > 16 && parseInt(item.key) < 25){
                colorbg = 'purple';
            }
            if(parseInt(item.key) > 24 && parseInt(item.key) < 33){
                colorbg = 'orange';
            }
            if(parseInt(item.key) > 32){
                colorbg = 'red';
            }

            if(parseInt(item.score_history) < item.score){
                change_icon = <AiFillCaretUp/>;
            }else if(parseInt(item.score_history) === item.score){
                change_icon = <TiEquals/>;
            }else if(parseInt(item.score_history) > item.score){
                change_icon = <AiFillCaretDown/>;
            }
            
            return(
                <tr key={key}>
                <td className="pos-col">{key+1}</td>
                <td className="shield-col"><img alt="shield-team" className="table-shield" src={item.shield}></img></td>
                <td className="team-col"><Button className="btn-ranking-name" onClick={()=>this.props.data.activateTeamInfo(key+1)}>{item.name}</Button></td>
                <td className="prevp-col">{item.score_history}</td>
                <td className="points-col" >{item.score}</td>
                <td className="change-col">{change_icon}</td>
                <td className="change-col" style={this.colorbg}><BsDot/></td>
                </tr>
              )
          })
    }
  
    render() {
        return(
            <Table borderless className="home-ranking" size="sm sm">
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

