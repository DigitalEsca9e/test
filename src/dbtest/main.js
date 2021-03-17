import React, {Component, createElement} from 'react';
import { Link } from 'react-router-dom';
import Localbase from 'localbase';
import * as ManiF from './helpers.js';
import Board from './board.js';
import ElementCard from './elementCard.js';
import '../App.css';
import {Card} from 'react-bootstrap';

let db = new Localbase('Mani')
var nboards=0
var counter=1
console.log('total no. of board= ' +nboards)


export class BoardsPage extends Component{
    
    constructor (props){
        super(props);
        
        this.state={
            arr:[
                {
                    id: 1,
                    title: 'Board 1'
                },
                {
                    id:2,
                    title:'Board 2'
                }
            ]
        }

        this.addBoard=this.addBoard.bind(this);
        this.hypo=this.hypo.bind(this);
        this.showAll=this.showAll.bind(this);
    }

    hypo(){

    }
    addBoard(){
        
    }
    showAll(){
        this.state.arr.map((boards)=>
            <ElementCard idcopy={boards.id} title={boards.title}/>)       
    }

    render(){

        return(
            <div>
                <div id="boardsDisplay" className="AllDisplayArea"> 
                {this.showAll}   
                </div>
                <Link to="/board">To Board</Link>
                <Link to="/codecheck">Codecheck</Link>
                <br />
                <button onClick={this.addBoard}>Add Board</button>
                <button type="submit" onClick={ManiF.deleteBoardFromDB}>Delete Board</button>
                <br/>
                <button onClick={ManiF.deleteCollection}>delete boards collection</button>
                <button onClick={ManiF.deletedatabase}>delete db</button>
            </div>
        );
    }
} 

export default BoardsPage;