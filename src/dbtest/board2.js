import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import * as ManiF from './helpers.js';
import Localbase from 'localbase';
import Board from './board.js';
import ElementCard from './elementCard.js';
import {Card} from 'react-bootstrap';
import Note2 from './note2.js';
let db = new Localbase('Mani')
const Board2 = ({notes,ide,setNotes,setIde,setNoteele}) => {
    function addNoteToDB(ide, notes){
      var n=notes.length+1
      notes.push({
        id: n,
        title:'note '+ n,
        noteele:[]
      })
        db.collection('boards').doc({id:ide}).update({
        notes:notes
      })

    }
    function deleteNoteFromDB(ide,notes,givenId){
      var n=notes.length
      if(n!==0 || givenId<n){
        notes.splice(0,givenId-1)
        for(var i=givenId-1;i<notes.length;i++){
          notes[i].id=i-1
          db.collection('boards').doc({id:ide}).update({
            notes:notes
          })
        }
        console.log(notes)
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      }
    }
    function getNotes(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        if(doc){
        setNotes(doc.notes)
        }
      })
      }
  useEffect(() => {
    const interval=setInterval(() => {
      getNotes();  
    }, 500);
    return() =>clearInterval(interval)
  }, []);

    console.log(notes)
    return (
      <>
        <div id="boardsDisplay" className="AllDisplayArea">
        {notes.map((a)=>{
                return(
                  <Card id={a.id} className="Cards">
                  <Link to={`/note2`}>
                      <Card.Body onClick={() => {setNoteele(a.noteele)}}>
                          <Card.Title>{a.title}</Card.Title>
                      </Card.Body>
                  </Link>
                  <button onClick={() =>{deleteNoteFromDB(ide,notes,a.id)}}>Delete Button</button>
                  </Card>
                )
                
                })}
          </div>
                <Link to="/note2">To Note</Link>
                <Link to="/" >Back</Link>
                <br />
                <button >Button</button>
                <button onClick={()=> addNoteToDB(ide, notes)}>Add Note</button>
                <button>Delete Note</button>
      </>
    );
  };
  export default Board2