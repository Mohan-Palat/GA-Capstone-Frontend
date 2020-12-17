import React from 'react';
import Hand from './Hand'

function HandsList(props){

    const hands = props.hands.map((hand)=>{
        console.log('id: ',hand._id.$oid)
        return (<Hand key={hand._id.$oid} hand={hand} id = {hand._id.$oid}></Hand>)
    })
    return(
        <div>
            {hands}
        </div>
    );
}

export default HandsList;