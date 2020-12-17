import React, { Component } from 'react';
import axios from 'axios';

const apiURL = 'http://localhost:5000';

class Session extends Component{
    constructor(props){
        super(props);
        this.state = {
            hands: []
        }
    }

    getAllHands = async() =>{
        const handsURL = apiURL+'/Sessions/'+this.props.id+'/Hands';
        console.log('get all hands in session: '+handsURL);
        console.log('date: ',this.props.session.date.$date)
        try{
            const allHands = await axios.get(handsURL);

            await this.setState(
                {
                    hands: allHands.data
                }
            )
            console.log(this.state.hands);
        } catch(err){
            console.log(err);
        }
    }

    componentDidMount(){
        this.getAllHands();
    }

    render(){
        const date = new Date(this.props.session.date.$date).toDateString();
        return(
            <div>
                {this.props.session.location}
                {date}
            </div>
        );
    }
}

export default Session;