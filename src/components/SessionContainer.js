import React, { Component } from 'react';
import axios from 'axios';
//import { Grid, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SessionList from './SessionList';
import SessionShow from './SessionShow';
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
            currentSession: {},
            currentHands: []
        }
    }

    setCurrentSession = (session,hands) =>{
        this.setState(
            {
                currentSession: session,
                currentHands: hands
            }
        )
    }

    addNewSession = async(e,data) =>{
        console.log(data);
        const newSessionURL = apiURL+'/Sessions'

        try{
            await axios.post(newSessionURL,data);
        }
        catch(err){
            console.log(err);
        }

        return '';
      }
    
    getSessionByID = () =>{

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
         const sessionPath = '/Sessions/'+this.state.currentSession.id
         //const sessionPath = '/Sessions/5fdade9e855dae11865dcf2f'
        return(
            <div>
                <Router>
                <Route exact path = "/Sessions">
                    <SessionList sessions = {this.state.sessions} addNewSession = {this.addNewSession} setCurrentSession = {this.setCurrentSession}></SessionList>
                </Route>
                <Route exact path = "/NewSession">
                    <CreateSession addNewSession ={this.addNewSession}></CreateSession>
                </Route>
                <Route exact path = {sessionPath}>
                    <SessionShow id = {sessionPath} ></SessionShow>
                </Route>
                </Router>

            </div>
        );
    }
}

export default SessionContainer;