import Home from './route/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Detail from './route/Details';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movie">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
