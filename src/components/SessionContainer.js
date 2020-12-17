import React, { Component } from 'react';
import axios from 'axios';
//import { Grid, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SessionList from './SessionList';
import CreateSession from './CreateSession';

const apiURL = 'http://localhost:5000';

class SessionContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            sessions: [],
            sessionToEdit: {
                location:''
            },
            showEditModal: false,
            showNewSessionModal: false,
            newSession:{
                location: ''
            },
            currentSession: {}
        }
    }

    addNewSession = () =>{
        return '';
      }

    getAllSessions = async() =>{
        const sessionsURL = apiURL+'/Sessions';
        console.log('get all sessions: '+sessionsURL);
        try{
            const allSessions = await axios.get(sessionsURL);

            await this.setState(
                {
                    sessions: allSessions.data.sort((a,b)=>b.date.$date-a.date.$date)
                }
            )
            console.log('Sessions: ',this.state.sessions);
        } catch(err){
            console.log(err);
        }
    }

    // getAllHands = (key) =>{
    //     const handsURL = apiURL+'/'+key+'/Hands';
    //     console.log('get all hands in session: '+handsURL);
    //     try{
    //         const allHands = await axios.get(handsURL);

    //         return allHands
    //     } catch(err){
    //         console.log(err);
    //     }
    // }

    componentDidMount(){
        this.getAllSessions();
    }

    render(){
        
        return(
            <div>
                <Router>
                <Route exact path = "/Sessions">
                    <SessionList sessions = {this.state.sessions} addNewSession = {this.addNewSession}></SessionList>
                </Route>
                <Route exact path = "/NewSession">
                    <CreateSession addNewSession ={this.addNewSession}></CreateSession>
                </Route>
                </Router>
            </div>
        );
    }
}

export default SessionContainer;