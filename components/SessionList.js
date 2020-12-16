import React, { Component } from 'react';
import axios from 'axios';

const apiURL = 'https://localhost:5000';

class SessionList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sessions: []
        }
    }

    getAllSessions = () =>{
        const sessionsURL = apiURL+'/Sessions';
        
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default SessionList;