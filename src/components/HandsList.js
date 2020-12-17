import React from 'react';
import Hand from './Hand'

function HandList(props){
    console.log('props: ',props.sessions)

    const hands = props.hands.map((hand)=>{
        console.log('id: ',session._id.$oid)
        return (<Hand key={hand._id.$oid} hand={hand} id = {hand._id.$oid}></Hand>)
    })
    return(
        <div>
            {hands}
            <div>
                <a href = "/NewHand">Add Hand</a>
            </div>
            
            {/* <Button>Add Session</Button> */}
        </div>
    );
}

export default HandList;