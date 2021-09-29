import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id" exact>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
