 /* eslint-disable */
 import React from 'react';
 import {Route,Switch,BrowserRouter} from 'react-router-dom'
 import Home from './Pages/Home'
 import Team from './Pages/Team'
 import  Cup from './Pages/Cup'
 import './Styles/App.scss';
 
 class App extends React.Component{
   
   render(){
       return(            
        <div >
          {/* <Header/> */}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/cup" component={Cup}/>
            </Switch>
          </BrowserRouter>
        </div>   
        
       )
   }
 }
 
 export default App;