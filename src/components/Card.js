import React from 'react';

function Card(props){
  
    return(
        <div>
           {props.rank}{props.suit}
        </div>
    );
}

export default Card;