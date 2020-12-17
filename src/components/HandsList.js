import React from 'react';
import Hand from './Hand'

function HandsList(props){
    // console.log('props: ',props.sessions)

    // const hands = props.sessions.map((session)=>{
    //     console.log('id: ',session._id.$oid)
    //     return (<Hand key={session._id.$oid} session={session} id = {session._id.$oid}></Hand>)
    //})
    return(
        <div>
            {/* {hands} */}
            <div>
                <a href = "/NewHand">Add Hand</a>
            </div>
            
            {/* <Button>Add Session</Button> */}
        </div>
    );
}

export default HandsList;