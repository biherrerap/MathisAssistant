
import React from 'react';
import Table from 'react-bootstrap/Table'

import '../../Styles/HomeStyles.scss';
import '../../Styles/TournamentStyles.scss';

import Match from '../Matches'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import LeftMenu from '../Home/Menu';

import { BsArrowRight} from 'react-icons/bs';

//import Header from '../Header';
//import API_URL from '../Server';

export default class Group extends React.Component{

    render() {
        return(
            <Table borderless className="home-raking" size="sm sm">
            <thead>
                <tr>
                <th className="pos-col´-group"></th>
                <th className="shield-col-group"></th>
                <th className="team-col-group">Team</th>
                <th className="change-col-group">G</th>
                <th className="change-col-group">E</th>
                <th className="change-col-group">P</th>
                <th className="change-col-group">F</th>
                <th className="change-col-group">C</th>
                <th className="pts-col-group">Pts.</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td className="pos-col-group">1</td>
                <td className="shield-col-group"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                <td className="team-col-group">Tottenham</td>
                <td className="change-col-group">3</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">8</td>
                <td className="change-col-group">3</td>
                <td className="pts-col-group">9</td>
            </tr>
            <tr>
                <td className="pos-col-group">1</td>
                <td className="shield-col-group"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                <td className="team-col-group">Tottenham</td>
                <td className="change-col-group">3</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">8</td>
                <td className="change-col-group">3</td>
                <td className="pts-col-group">9</td>
            </tr>
            <tr>
                <td className="pos-col-group">1</td>
                <td className="shield-col-group"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                <td className="team-col-group">Tottenham</td>
                <td className="change-col-group">3</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">8</td>
                <td className="change-col-group">3</td>
                <td className="pts-col-group">9</td>
            </tr>
            <tr>
                <td className="pos-col-group">1</td>
                <td className="shield-col-group"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                <td className="team-col-group">Tottenham</td>
                <td className="change-col-group">3</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">0</td>
                <td className="change-col-group">8</td>
                <td className="change-col-group">3</td>
                <td className="pts-col-group">9</td>
            </tr>
            </tbody>
         </Table>
        )
    }
}

 