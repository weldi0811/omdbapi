import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';
import Navbar from './shared/components/navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movie/:id" exact>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
