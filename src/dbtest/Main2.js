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
const Main2 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
          setData(n);
          setIsLoading(false);
    }, []);
    console.log("data is :" +data)
    return (
      <>
        <div id="boardsDisplay" className="AllDisplayArea">
        {!isLoading &&
          ManiF.displayFE(data)}
          </div>
                <Link to="/board">To Board</Link>
                <Link to="/codecheck">Codecheck</Link>
                <br />
                <button >Button</button>
                <button onClick={ManiF.addBoardToDB}>Add Board</button>
                <button>Delete Board</button>
                <br/>
                <button onClick={ManiF.deleteCollection}>delete boards collection</button>
                <button onClick={ManiF.deletedatabase}>delete db</button>
      </>
    );
  };
  export default Main2