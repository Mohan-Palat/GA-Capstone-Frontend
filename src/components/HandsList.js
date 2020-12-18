import React from 'react';
import Hand from './Hand'
import { Button } from 'semantic-ui-react';

function HandsList(props){

    const hands = props.hands.map((hand)=>{
        console.log('CURRENT HAND: ',hand)
        return (<>
                    <Hand key={hand._id.$oid} hand={hand} id = {hand._id.$oid}></Hand>
                    <Button onClick={(e)=>props.deleteHand(e,hand._id.$oid)}>Delete</Button>
                </>)
    })
    return(
        <div>
            {hands}
        </div>
    );
}

export default HandsList;