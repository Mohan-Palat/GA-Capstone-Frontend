import React, { Component } from 'react';
import axios from 'axios';

const apiURL = 'https://localhost:5000';

class Session extends Component{
    constructor(props){
        super(props);
        this.state = {
            hands: []
        }
    }

    getAllHands = () =>{
        const handsURL = apiURL+'';
    }

    componentDidMount(){
        this.getAllHands();
    }

    render(){
        return(
            <div>
                {this.props.session.location}
            </div>
        );
    }
}

export default Session;