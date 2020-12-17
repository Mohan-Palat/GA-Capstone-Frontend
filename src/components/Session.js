import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
//const apiURL = 'http://localhost:5000';

class Session extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const date = new Date(this.props.session.date.$date).toDateString();
        const sessionPath = '/Sessions/'+this.props.id
        return(
            <div>
                <Link to = {sessionPath}>{this.props.session.location} </Link>  
                <br/>
                {date}
            </div>
        );
    }
}

export default Session;