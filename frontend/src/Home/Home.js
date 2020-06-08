import React from 'react';
//import '../styles/Home.css';
//import Header from '../Header';
//import API_URL from '../Server';

class Home extends React.Component{
/*
    constructor(props){
        super(props);
        this.state = {
            storeList:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        const axios = require("axios")
        axios.post(API_URL, {
            headers: {"Public" : true}, 
            query: `query{                
                allStores{
                    code
                    name
                    type
                    owner
                    ubication
                    dates
                    description
                    img
                } 
              }`
        }).then(res => {
            // console.log(res);
            this.setState({
                storeList:res.data.data.allStores
            }) 
        })    
    };
*/ 
    displayStores(){                        
          return(
              <h1>Here's your home</h1>
          )} 

    render() {
        return(
        <section id="team" class="pb-5">
                <br></br>
         <div class="container">
                <h1 id = "onboard">Bienvenido a bordo</h1>
                <hr id = "hr"></hr>
        <br></br>
        <form class="form-inline">
   
        </form>
        <div class="row">
                         {this.displayStores()};
                </div>
            </div>
    </section>
        )
    }
}

export default Home;