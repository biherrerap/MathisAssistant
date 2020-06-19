 /* eslint-disable */
 import React from 'react';
 import {Route,Switch,BrowserRouter} from 'react-router-dom'

 import Home from './Pages/Home'
 import Teams from './Pages/Teams'
 import Team from './Pages/Team'

 import './Styles/App.scss';
 import './Styles/TeamStyles.scss';
 import './Styles/App.scss';

 class App extends React.Component{
   
   render(){
       return(            
        <div >
          {/* <Header/> */}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/team" component={Team} />
            </Switch>
          </BrowserRouter>
        </div>   
        
       )
   }
 }
 
 export default App;