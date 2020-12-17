import React from 'react';
import Hand from './Hand'

function SessionShow(props){
    console.log('In Session SHow: ',props.id)

    // const hands = props.hands.map((hand)=>{
    //     console.log('id: ',session._id.$oid)
    //     return (<Hand key={session._id.$oid} session={session} id = {session._id.$oid}></Hand>)
    // })
    return(
        <div>
            {props.id}
            <div>
                <a href = "/NewHand">Add Hand</a>
            </div>
            
            {/* <Button>Add Session</Button> */}
        </div>
    );
}

export default SessionShow;