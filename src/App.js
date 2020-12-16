import './App.css';
import {React, Component } from 'react';
import SessionList from './components/SessionList';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <SessionList></SessionList>
          </Route>
        </Router>
        
      </>
    );
  };
}

export default App;