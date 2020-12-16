import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
const apiURL = 'https://localhost:5000';

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
        console.log('get all sessions: ');
        try{
            const allSessions = await axios(sessionsURL);
            console.log(allSessions.data.data);
        } catch(err){
            console.log(err);
        }

    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default SessionList;