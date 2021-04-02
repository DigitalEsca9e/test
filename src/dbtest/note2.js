import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import {Card} from 'react-bootstrap';
import * as ManiF from './helpers.js';
import Localbase from 'localbase';
import Board from './board.js';
import ElementCard from './elementCard.js';
import note from "./note.js";
let db = new Localbase('Mani')

const Note2 = ({ide,noteele,setNoteele,setIde}) => {

  
    console.log("This is the main page notbook")
    return (
      <>
        <div id="boardsDisplay" className="AllDisplayArea">
        {noteele.map((a)=>{
                return(
                  <Card id={a.id} className="Cards">
                      <Card.Body>
                          <Card.Title>{a.title}</Card.Title>
                      </Card.Body>
                  <button>Delete Button</button>
                  </Card>
                )
                
                })}
          {console.log()}
          </div>
                <Link to="/board">To Board</Link>
                <Link to="/codecheck">Codecheck</Link>
                <br />
                <button >Button</button>
                <button onClick={ManiF.addBoardToDB}>Add Noteele</button>
                <button>Delete Board</button>
                <br/>
                <button onClick={ManiF.deleteCollection}>delete boards collection</button>
                <button onClick={ManiF.deletedatabase}>delete db</button>
      </>
    );
  };
  export default Note2