import React, { Component } from 'react';
import Session from './Session'
import { Grid, Button } from 'semantic-ui-react';
const apiURL = 'http://localhost:5000';

function SessionList(props){
    console.log('props: ',props.sessions)

    const sessions = props.sessions.map((session)=>{
        return <Session key={session._id.$oid} session={session}></Session>
    })
    return(
        <div>
            {sessions}
            {/* <Button>Add Session</Button> */}
        </div>
    );
}

export default SessionList;