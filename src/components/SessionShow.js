import React, { Component } from 'react';
import HandsList from './HandsList'
import axios from 'axios';
const apiURL = 'http://localhost:5000';

class SessionShow extends Component{
    constructor(props){
        super(props);
        this.state = {
            hands: []
        }
    }

    getAllHands = async() =>{
        const handsURL = apiURL+'/Sessions/'+this.props.id+'/Hands';
        console.log('get all hands in session: '+handsURL);
        try{
            const allHands = await axios.get(handsURL);

            await this.setState(
                {
                    hands: allHands.data
                }
            )
            console.log('SessionSHow Hands: ',this.state.hands);
        } catch(err){
            console.log(err);
        }
    }

    componentDidMount(){
        this.getAllHands();
    }
    render(){
        
        return(
            <>
                {this.props.id}
                <div>
                 <a href = {'/Sessions/'+this.props.id+'/NewHand'}>Add Hand</a>
             </div>
            </>
        );
    }
}
// function SessionShow(props){
//     console.log('In Session SHow: ',props.id)

//     // const hands = props.hands.map((hand)=>{
//     //     console.log('id: ',session._id.$oid)
//     //     return (<Hand key={session._id.$oid} session={session} id = {session._id.$oid}></Hand>)
//     // })
//     return(
//         <div>
//             {props.id}
//             <div>
//                 <a href = "/NewHand">Add Hand</a>
//             </div>
            
//             {/* <Button>Add Session</Button> */}
//         </div>
//     );
// }

export default SessionShow;