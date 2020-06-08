 /* eslint-disable */
 import React from 'react';
 import {Route,Switch,BrowserRouter} from 'react-router-dom'
 import Home from './Home/Home'
 import './Styles/App.scss';
 
 class App extends React.Component{
   
   render(){
       return(            
        <div >
          {/* <Header/> */}
          <BrowserRouter>
             <Switch>
               <Route exact path = "/" component = {Home} />
             </Switch>
           </BrowserRouter>
        </div>   
        
       )
   }
 }
 
 export default App