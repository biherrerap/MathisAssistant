
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../Styles/HomeStyles.scss';

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
                        <td className="change-col">=</td>
                        </tr>
                        <tr>
                        <td className="pos-col">2</td>
                        <td className="shield-col"><img className="table-shield" src="https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/72.png"></img></td>
                        <td className="team-col">Tottenham</td>
                        <td className="points-col">68122</td>
                        <td className="change-col">=</td>
                        </tr>
                        <tr>
                        <td className="pos-col">3</td>
                        <td className="shield-col"><img className="table-shield" src="https://lh3.googleusercontent.com/proxy/B__GSq8-CdridKd9Vn7nXWeOuFfuGBxsuTS-LQG0-s_lfa4nMNXhkqTF3qE06XJKSp1IxzxhsVkO0JSRbqEFeIyFv7xhVEQ7k6TkfMhc-WVtYuZbxBo"></img></td>
                        <td className="team-col">Real Madrid</td>
                        <td className="points-col">65885</td>
                        <td className="change-col">=</td>
                        </tr>
                    </tbody>
                    </Table>
        )
    }
}

