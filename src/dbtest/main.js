import React, {Component, createElement} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';   
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

var a=[{}]
db.collection('boards').get().then(b =>{
    b.map(a =>{
        return(
            {a}
        )
    })
})
console.log("this is" + a)
export class BoardsPage extends Component{
    
    constructor (props){
        super(props);
        
        this.state={
            arr:[
                {
                    id: 1,
                    title: 'Board 1',
                    notes:[{}]
                },
                {
                    id:2,
                    title:'Board 2',
                    notes:[{}]
                }
            ],
            selecteddoc:{}
        }

        this.addBoard=this.addBoard.bind(this);
        this.hypo=this.hypo.bind(this);
    }

    hypo(){
        this.setState({
            selecteddoc:ManiF.getDoc()
        })
        console.log("this here is"+this.state.selecteddoc)
    }
    addBoard(i){
        this.state.arr[i].id=this.state.arr[i].title
        console.log(this.state.arr[i].id)
    }

    render(){

        return(
            <div>
                <div id="boardsDisplay" className="AllDisplayArea"> 
                <ElementCard  boards={this.state.arr}/>  
                </div>
                <Link to="/board">To Board</Link>
                <Link to="/codecheck">Codecheck</Link>
                <br />
                <button onClick={this.hypo}>Button</button>
                <button onClick={ManiF.addBoardToDB}>Add Board</button>
                <button type="submit" onClick={ManiF.deleteBoardFromDB}>Delete Board</button>
                <br/>
                <button onClick={ManiF.deleteCollection}>delete boards collection</button>
                <button onClick={ManiF.deletedatabase}>delete db</button>
            </div>
        );
    }
} 

export default BoardsPage;