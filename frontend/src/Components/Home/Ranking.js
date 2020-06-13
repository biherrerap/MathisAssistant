
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../Styles/HomeStyles.scss';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import {TiEquals} from 'react-icons/ti';

//import Header from '../Header';
//import API_URL from '../Server';

export default class Ranking extends React.Component{

    render() {
        return(
            <Table borderless className="home-raking" size="sm sm">
                    <thead>
                        <tr>
                        <th className="pos-col"></th>
                        <th className="shield-col"></th>
                        <th className="team-col">Team</th>
                        <th className="points-col">Points</th>
                        <th className="change-col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="pos-col">1</td>
                        <td className="shield-col"><img className="table-shield" src="https://i.pinimg.com/originals/4e/87/0c/4e870c6d61be9306bd9681554b0df83d.png"></img></td>
                        <td className="team-col">Barcelona</td>
                        <td className="points-col">74626</td>
                        <td className="change-col"><TiEquals/></td>
                        </tr>
                        <tr>
                        <td className="pos-col">2</td>
                        <td className="shield-col"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                        <td className="team-col">Tottenham</td>
                        <td className="points-col">68122</td>
                        <td className="change-col"><TiEquals/></td>
                        </tr>
                        <tr>
                        <td className="pos-col">3</td>
                        <td className="shield-col"><img className="table-shield" src="https://toppng.com/uploads/preview/escudo-del-real-madrid-11551060158j7jgejcdbu.png"></img></td>
                        <td className="team-col">Real Madrid</td>
                        <td className="points-col">65885</td>
                        <td className="change-col"><AiFillCaretUp/></td>
                        </tr>
                        <tr>
                        <td className="pos-col">4</td>
                        <td className="shield-col"><img className="table-shield" src="https://i0.pngocean.com/files/149/536/895/inter-milan-football-serie-a-a-c-milan-uefa-champions-league-football.jpg"></img></td>
                        <td className="team-col">Internazionale</td>
                        <td className="points-col">65885</td>
                        <td className="change-col"><TiEquals/></td>
                        </tr>
                        <tr>
                        <td className="pos-col">5</td>
                        <td className="shield-col"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/22.png"></img></td>
                        <td className="team-col">Milan</td>
                        <td className="points-col">65885</td>
                        <td className="change-col"><AiFillCaretDown/></td>
                        </tr>
                    </tbody>
                    </Table>
        )
    }
}

