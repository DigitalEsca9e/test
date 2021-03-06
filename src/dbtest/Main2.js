import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import {Card} from 'react-bootstrap';
import * as ManiF from './helpers.js';
import Localbase from 'localbase';
import Board from './board.js';
import './note2.js'
import ElementCard from './elementCard.js';
import note from "./note.js";
let db = new Localbase('Mani')

const Main2 = ({notebook,setNotebook,notes,setNotes,setIde}) => {
  function addBoardToDB(){
        var n= notebook.length+1
        notebook.push({
            id: n,
            title: 'Board '+ n,
            notes:[]
        })
        db.collection('boards').set(notebook)
  }
    function getBoards(db) {
          db.collection('boards').get().then(arr=>{
            setNotebook(arr)
        })
      }
      useEffect(() => {
        const interval=setInterval(() => {
          getBoards(db);  
        }, 500);
        return() =>clearInterval(interval)
      }, []);

          
    return (
      <>
        <div id="boardsDisplay" className="AllDisplayArea">
        {notebook.map((a)=>{
                return(
                  <Card id={a.id} className="Cards">
                  <Link to={`/${a.title}`}>
                      <Card.Body onClick={() => {setNotes(a.notes)
                      setIde(a.id)}}>
                          <Card.Title>{a.title}</Card.Title>
                      </Card.Body>
                  </Link>
                  <button onClick={() =>{ManiF.deleteBoardFromDB(a.id)}}>Delete Button</button>
                  </Card>
                )
                
                })}
          {console.log()}
          </div>
                <Link to="/board">To Board</Link>
                <Link to="/codecheck">Codecheck</Link>
                <Link t0='/note2'>to Note</Link>
                <br />
                <button >Button</button>
                <button onClick={addBoardToDB}>Add Board</button>
                <button>Delete Board</button>
                <br/>
                <button onClick={ManiF.deleteCollection}>delete boards collection</button>
                <button onClick={ManiF.deletedatabase}>delete db</button>
      </>
    );
  };
  export default Main2