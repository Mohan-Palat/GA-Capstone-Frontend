import './App.css';
import {React, Component } from 'react';
import SessionContainer from './components/SessionContainer';

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