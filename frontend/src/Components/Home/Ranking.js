
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

    organizeRanking(dict){
        console.log(dict)
    }

    fillTable(){
        return this.state.teamList.map( (item,key) => {
            if(parseInt(item.key) > 0 && parseInt(item.key) < 9){
                var colorbg = 'green';
            }
            if(parseInt(item.key) > 8 && parseInt(item.key) < 17){
                var colorbg = 'blue';
            }
            if(parseInt(item.key) > 16 && parseInt(item.key) < 25){
                var colorbg = 'purple';
            }
            if(parseInt(item.key) > 24 && parseInt(item.key) < 33){
                var colorbg = 'orange';
            }
            if(parseInt(item.key) > 32){
                var colorbg = 'red';
            }

            if(parseInt(item.score_history) < item.score){
                var change_icon = <AiFillCaretUp/>;
            }else if(parseInt(item.score_history) == item.score){
                var change_icon = <TiEquals/>;
            }else if(parseInt(item.score_history) > item.score){
                var change_icon = <AiFillCaretDown/>;
            }
            
            return(
                <tr key={key}>
                <td className="pos-col">{key+1}</td>
                <td className="shield-col"><img className="table-shield" src={item.shield}></img></td>
                <td className="team-col">{item.name}</td>
                <td className="prevp-col">{item.score_history}</td>
                <td className="points-col">{item.score}</td>
                <td className="change-col">{change_icon}</td>
                <td className="change-col" style={colorbg}><BsDot/></td>
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

