import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css'

const ElementCard = (boards) =>{
    
            <Card id={boards.idcopy} className="Cards">
                <Card.Title>{boards.title}</Card.Title>
                <button onclick={boards.deletebutton}>Delete Button</button>
            </Card>
}
export default ElementCard;