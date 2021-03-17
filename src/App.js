
import './App.css';
import BoardsPage from './dbtest/main.js';
import Board from './dbtest/board.js';
import notePage from './dbtest/note.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={BoardsPage} />
          <Route path="/board" component={Board} />
          <Route path="/note" component={notePage} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
