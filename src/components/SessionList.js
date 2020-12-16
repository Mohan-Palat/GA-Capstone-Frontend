import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
const apiURL = 'http://localhost:5000';

class SessionList extends Component{
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

    getAllSessions = async() =>{
        const sessionsURL = apiURL+'/Sessions';
        console.log('get all sessions: '+sessionsURL);
        try{
            const allSessions = await axios.get(sessionsURL);

            await this.setState(
                {
                    sessions: allSessions.data
                }
            )
            //console.log(this.state.sessions);
        } catch(err){
            console.log(err);
        }
    }

    componentDidMount(){
        this.getAllSessions();
    }

    render(){

        return(
            <div>
                Hello!
            </div>
        );
    }
}

export default SessionList;