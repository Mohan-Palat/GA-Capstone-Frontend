import React from 'react';
import { Link } from "react-router-dom";

function Hand(props){
    const deltaClass = props.hand.delta >=0 ? 'positive':'negative'
    console.log('DELTA: ',deltaClass)
    console.log('HAND: ',props.hand._id.$oid)
    const handPath = '/Hands/'+props.hand._id.$oid
    return(
        <div>
           <Link to = {handPath}>
                {props.hand.hole_cards[0].rank}{props.hand.hole_cards[0].suit}{props.hand.hole_cards[1].rank}{props.hand.hole_cards[1].suit}
           </Link>
           <div className="positive">{props.hand.delta}</div>
        </div>
    );
}

export default Hand;