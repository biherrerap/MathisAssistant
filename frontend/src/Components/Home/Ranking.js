
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../Styles/HomeStyles.scss';
import '../../Styles/RankingStyles.scss';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import {TiEquals} from 'react-icons/ti';
import {BsDot} from 'react-icons/bs';

//import Header from '../Header';
//import API_URL from '../Server';

export default class Ranking extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rankingList:[
                {
                    position: '1',
                    shield: 'https://i.pinimg.com/originals/4e/87/0c/4e870c6d61be9306bd9681554b0df83d.png',
                    team: 'Barcelona',
                    prev_points: '74626',
                    points: '74626',
                    class: '1'
                },
                {
                    position: '2',
                    shield: 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png',
                    team: 'Tottenham',
                    prev_points: '68122',
                    points: '68122',
                    class: '1'
                },
                {
                    position: '3',
                    shield: 'https://lh3.googleusercontent.com/proxy/u2XPrbqNvuvdECDkekG08gxQ_cihDksHdew1IrP2iHUn5Y18pXDbTQXzFJ0dHQIGv2yyfhjj4ks8bllGvURUdqX9Vm1sJKiy_IlUc7oPD77f0X9xzvg',
                    team: 'Real Madrid',
                    prev_points: '65855',
                    points: '65855',
                    class: '1'
                },
                {
                    position: '4',
                    shield: 'https://w7.pngwing.com/pngs/149/536/png-transparent-inter-milan-football-serie-a-a-c-milan-uefa-champions-league-football-trademark-logo-sports-thumbnail.png',
                    team: 'Internazionale',
                    prev_points: '56250',
                    points: '56250',
                    class: '1'
                },
                {
                    position: '5',
                    shield: 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/22.png',
                    team: 'Milan',
                    prev_points: '52980',
                    points: '52980',
                    class: '1'
                },        
            ]
        }
    }


    fillTable(){
        return this.state.rankingList.map( (item,key) => {
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
            return(
                <tr key={key}>
                <td className="pos-col">{item.position}</td>
                <td className="shield-col"><img className="table-shield" src={item.shield}></img></td>
                <td className="team-col">{item.team}</td>
                <td className="prevp-col">{item.prev_points}</td>
                <td className="points-col">{item.points}</td>
                <td className="change-col"><TiEquals/></td>
                <td className="change-col"><BsDot style = {{color: colorbg}}/></td>
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

