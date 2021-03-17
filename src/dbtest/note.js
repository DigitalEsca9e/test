import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class note extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return(
            <div>
                <Link to="/board">Back</Link>
                <br/>
                <button>Add Note Element</button>
            </div>
        );
    }
} 
export default note;