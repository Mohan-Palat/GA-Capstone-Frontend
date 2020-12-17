import './App.css';
import {React, Component } from 'react';
import SessionContainer from './components/SessionContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Button } from 'semantic-ui-react';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <>
        <Router>
          <Route exact path = "/Sessions">
            <SessionContainer></SessionContainer>
          </Route>
        </Router>
        
      </>
    );
  };
}

export default App;