
import './App.css';
import React, {useState} from 'react';
import BoardsPage from './dbtest/main.js';
import Localbase from 'localbase';
import Board from './dbtest/board.js';
import notePage from './dbtest/note.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Main2 from './dbtest/Main2';
import Board2 from './dbtest/board2';
import Note2 from './dbtest/note2';
import ElementCard from './dbtest/elementCard';

function App() {
  const [notebook,setNotebook] = useState([])
  const [note,setNote]=useState([])
  const [noteele,setNoteele]=useState([])
  const [ide,setIde]=useState()
  console.log('thus is the App page '+ notebook)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main2 notebook={notebook} setNotebook={setNotebook} notes={note} setNotes={setNote} setIde={setIde}/>
          </Route>
          <Route path="/:boardId">
            <Board2 notes={note} ide={ide} setNotes={setNote} setIde={setIde} setNoteele={setNoteele}/>
          </Route>
          <Route path="/dbtest/note2" >
          <Note2 noteele={noteele} ide={ide} setNoteele={setNoteele} setIde={setIde}/>  
          </Route>
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
