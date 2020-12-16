import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
const apiURL = 'http://localhost:5000';

class SessionList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('props: ',this.props.sessions)
        return(
            <div>
                Hellko
            </div>
        );
    }
}

export default SessionList;