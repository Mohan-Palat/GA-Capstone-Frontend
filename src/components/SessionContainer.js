import React, { Component } from 'react';
import axios from 'axios';
//import { Grid, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import SessionList from './SessionList';
import SessionShow from './SessionShow';
import CreateSession from './CreateSession';
import CreateHand from './CreateHand';

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

    addNewHand = async(e,data,id)=>{
        console.log(data);
        const newHandURL = apiURL+'/Sessions/'+id+'/Hands';
        try{
            await axios.post(newHandURL,data);
        }
        catch(err)
        {
            console.log(err);
        }
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
    

    deleteHand = async(e,id) =>{
        console.log(id);
        const deleteHandURL = apiURL+'/Hands/'+id

        try{
            await axios.delete(deleteHandURL);
        }
        catch(err){
            console.log(err);
        }

        return '';
    }

    deleteSession = async(e,id) =>{
        console.log(id);
        const deleteSessionURL = apiURL+'/Sessions/'+id

        try{
            await axios.delete(deleteSessionURL);
        }
        catch(err){
            console.log(err);
        }

        return '';
    }

    getHands = async(id) =>{
        console.log('GET HANDS CALLED param: ',id);
        const handsURL = apiURL+'/Sessions/'+id+'/Hands'
        try{
            const allHands = await axios.get(handsURL);
            return allHands;
        }
        catch(err){
            console.log(err);
        }
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

    componentWillUnmount(){
        console.log("######UNMOUNT#######");
    }

    render(){
         const sessionPath = '/Sessions/'+this.state.currentSession.id
         //const sessionPath = '/Sessions/5fdade9e855dae11865dcf2f'
        return(
            <div>
                <Router>
                <Route exact path = "/Sessions">
                    <SessionList sessions = {this.state.sessions} setCurrentSession = {this.setCurrentSession}></SessionList>
                </Route>
                <Route exact path = "/NewSession">
                    <CreateSession addNewSession ={this.addNewSession}></CreateSession>
                </Route>
                <Route exact path = '/Sessions/:id' render={({match})=>{
                    console.log('MATCH: ',match.params.id);
                    const session = this.state.sessions.filter(item=> item._id.$oid === match.params.id)
                    const hands = this.getHands(match.params.id);
                    console.log('SESSION: ',session);
                    console.log('HANDS',hands);
                    return <SessionShow id = {match.params.id} session = {session}></SessionShow>
                }}> 
                </Route>
                <Route exact path = '/Sessions/:id/NewHand' render={({match})=>{
                    return <CreateHand id = {match.params.id } addNewHand={this.addNewHand}></CreateHand>
                }}>
                    
                </Route>
                </Router>

            </div>
        );
    }
}


//SessionContainer
    //SessionList
        //Session*Item* //SessionShow
export default SessionContainer;