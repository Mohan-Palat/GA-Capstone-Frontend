import React from 'react';
import Session from './Session'
import { Button } from 'semantic-ui-react';
function SessionList(props){
    console.log('props: ',props.sessions)

    const sessions = props.sessions.map((session)=>{
        console.log('id: ',session._id.$oid)
        return (<>
                    <Session key={session._id.$oid} session={session} id = {session._id.$oid} setCurrentSession = {props.setCurrentSession}></Session>
                    <Button onClick={(e)=>props.deleteSession(e,session._id.$oid)}>Delete</Button>
                </>)
    })
    return(
        <div>
            {sessions}
            <div>
                <a href = "/NewSession">Add Session</a>
            </div>
            
            {/* <Button>Add Session</Button> */}
        </div>
    );
}

export default SessionList;