import React, { Component } from 'react';
import Hand from './Hand'


function SessionShow(props){
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

// class SessionShow extends Component{
//     constructor(props){
//         super(props);
//     }
//     // const hands = props.hands.map((hand)=>{
//     //     console.log('id: ',session._id.$oid)
//     //     return (<Hand key={session._id.$oid} session={session} id = {session._id.$oid}></Hand>)
//     // })
//     componentDidMount(){
//         console.log("zzzz")
//     }
//     render(){
//         return(
//             <>
//                 {this.props.id}
//             </>
//         )
//     }
// }

export default SessionShow;