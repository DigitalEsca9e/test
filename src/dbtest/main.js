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
const n=[]
db.collection('boards').get().then(arr=>{
    for(var i=0;i<arr.length;i++){
        n.push(arr[i])
    }
})
console.log(n)
export class BoardsPage extends Component{
    
    constructor (props){
        super(props);
        
        this.state={
            arr:n,
            selecteddoc:{}
        }

    }
    
    render(){
        return(
            <div>
                <div id="boardsDisplay" className="AllDisplayArea"> 
                {ManiF.displayFE(n)}
                </div>
                <Link to="/board">To Board</Link>
                <Link to="/codecheck">Codecheck</Link>
                <Board dataMainToBoard={this.state.arr}/>
                <br />
                <button >Button</button>
                <button onClick={ManiF.addBoardToDB}>Add Board</button>
                <button>Delete Board</button>
                <br/>
                <button onClick={ManiF.deleteCollection}>delete boards collection</button>
                <button onClick={ManiF.deletedatabase}>delete db</button>
            </div>
        );
    }
} 

export default BoardsPage;