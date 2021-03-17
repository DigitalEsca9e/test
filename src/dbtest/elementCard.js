import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import { render } from 'react-dom';
import '../App.css'
import * as ManiF from './helpers.js'
import { Link } from 'react-router-dom';

const ElementCard = ({boards}) =>{
    console.log({boards})
    return(
            <div className='abc'>
            {boards.map((board)=>{
                {console.log()}
                    return(
                    <Link to='/board'>
                    <Card id={board.id} onCLick={ManiF.getDoc(board.id)}className="Cards">
                        <Card.Title>{board.title}</Card.Title>
                        <div onClick={ManiF.deleteBoardFromDB}>Delete Button</div>
                    </Card>
                    </Link>
                    )
            })}
            </div>
            
    )
}
export default ElementCard;