import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import * as ManiF from './helpers.js';
import Localbase from 'localbase';
import Board from './board.js';
let db = new Localbase('Mani')
const n=[]
db.collection('boards').get().then(arr=>{
    for(var i=0;i<arr.length;i++){
        n.push(arr[i])
    }
})
const Board2 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const[isBoard, setIsBoard] =useState();
    useEffect(() => {
            setData(n.notes);
          setIsLoading(false);
    }, []);
    console.log("data is on board :" +data)
    return (
      <>
        <div id="boardsDisplay" className="AllDisplayArea">
        {!isLoading &&
          ManiF.displayFE(data)}
          </div>
                <Link to="/note">To Note</Link>
                <Link to="/">Back</Link>
                <br />
                <button >Button</button>
                <button onClick={ManiF.addBoardToDB}>Add Note</button>
                <button>Delete Note</button>
      </>
    );
  };
  export default Board2