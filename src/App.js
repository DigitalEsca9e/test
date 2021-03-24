
import './App.css';
import BoardsPage from './dbtest/main.js';
import Localbase from 'localbase';
import Board from './dbtest/board.js';
import notePage from './dbtest/note.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Main2 from './dbtest/Main2';
import Board2 from './dbtest/board2';

function App() {
  let db = new Localbase('Mani')
  const n=[]
  db.collection('boards').get().then(arr=>{
    for(var i=0;i<arr.length;i++){
      n.push(arr[i])
    }
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main2} />
          <Route path="/:boardId" component={Board2} />
          <Route path="/note" component={notePage} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
