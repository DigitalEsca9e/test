import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import { render } from 'react-dom';
import '../App.css'
import * as ManiF from './helpers.js'
import { Link } from 'react-router-dom';

const ElementCard = ({board}) =>{
    console.log({board})
    return(
        <div> 
                        
            <Card id={board.id} className="Cards">
                <Link to={`/${board.id}`}>
                    <Card.Body>
                        <Card.Title>{board.title}</Card.Title>
                    </Card.Body>
                </Link>
                <button onClick={() =>{ManiF.deleteBoardFromDB(board.id)}}>Delete Button</button>
            </Card>

        </div>
    )
}
export default ElementCard;