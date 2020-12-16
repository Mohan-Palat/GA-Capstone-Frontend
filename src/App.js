import './App.css';
import { Component } from 'react';
import SessionList from './components/SessionList';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <>
        <SessionList></SessionList>
      </>
    );
  };
}

export default App;