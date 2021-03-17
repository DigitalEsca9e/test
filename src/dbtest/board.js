import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            note: this.props.dataMainToBoard
        }
        console.log(this.state)
    };
    
    render(){
        return(
            <div>
                <Link to="/note">To note</Link>
                <br />
                <Link to="/">Back</Link>
                <br />
                <button>Add Note</button>
            </div>
        );
    }
} 
export default Board;