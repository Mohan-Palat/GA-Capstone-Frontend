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
        const apiURL = '';
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default Session;