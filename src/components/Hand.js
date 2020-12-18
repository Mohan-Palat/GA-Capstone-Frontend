import React from 'react';
function Hand(props){
    const deltaClass = props.hand.delta >=0 ? 'positive':'negative'
    console.log('DELTA: ',deltaClass)
    return(
        <div>
           {props.hand.hole_cards[0].rank}{props.hand.hole_cards[0].suit}{props.hand.hole_cards[1].rank}{props.hand.hole_cards[1].suit}
           <div className="positive">{props.hand.delta}</div>
        </div>
    );
}

export default Hand;