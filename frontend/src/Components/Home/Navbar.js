
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {FiSearch} from 'react-icons/fi';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import '../../Styles/HomeStyles.scss';

//import Header from '../Header';
//import API_URL from '../Server';

export default class Tournaments extends React.Component{

    render() {
        return(
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Mathis</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                        <FormControl  type="text" placeholder="Search" className="mr-sm-2 form-search-home" />
                        <Button id="button-search-home" variant="outline-success"><FiSearch/></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

