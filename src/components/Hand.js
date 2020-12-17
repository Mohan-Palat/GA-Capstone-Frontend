import React from 'react';

function Hand(props){
  
    return(
        <div>
           {props.hand.hole_cards[0].rank}{props.hand.hole_cards[0].suit}{props.hand.hole_cards[1].rank}{props.hand.hole_cards[1].suit}
        </div>
    );
}

export default Hand;