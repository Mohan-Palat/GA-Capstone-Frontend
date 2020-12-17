import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SessionShow from './SessionShow';
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
        const sessionPath = '/Sessions/'+this.props.id
        return(
            <>
            <div>
                <a href = {sessionPath}>{this.props.session.location}</a>  
                <br/>
                {date}
            </div>
            {/* <Router>
                <Route exact path = {sessionPath}>
                    <SessionShow id = {this.props.id} hands={this.state.hands}></SessionShow>
                </Route>
            </Router> */}
            </>
        );
    }
}

export default Session;