import './App.css';
import {React, Component } from 'react';
import SessionContainer from './components/SessionContainer';
import CreateSession from './components/CreateSession';
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
            <SessionContainer></SessionContainer>
      </>
    );
  };
}

export default App;