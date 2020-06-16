
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import '../../Styles/HomeStyles.scss';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { TiHomeOutline} from 'react-icons/ti';
import { GiSoccerBall} from 'react-icons/gi';
import { FaShieldAlt} from 'react-icons/fa';
import {AiOutlineOrderedList} from 'react-icons/ai';
import {IoMdStats} from 'react-icons/io';
import {IoIosSettings} from 'react-icons/io'

//import Header from '../Header';
//import API_URL from '../Server';

export default class Menu extends React.Component{

    render() {
        return(
            <Nav  className="flex-column">
            <Nav.Item>
                <Nav.Link href="/" className="menu-item-active">
                  <TiHomeOutline/> <span  className="menu-option-text" >Home</span> <RiArrowDropRightLine/> 
                </Nav.Link>
            </Nav.Item>   
            <Nav.Item>
                <Nav.Link className="menu-item">
                    <IoMdStats/> <span  className="menu-option-text" >Stats</span>
                </Nav.Link>
            </Nav.Item>                           
            <Nav.Item>
                <Nav.Link href="/cup" className="menu-item">
                   <GiSoccerBall/> <span  className="menu-option-text" >Tournaments</span> 
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" className="menu-item">
                   <IoIosSettings/> <span  className="menu-option-text" >Settings</span> 
                </Nav.Link>
            </Nav.Item>
        </Nav>
        )
    }
}

