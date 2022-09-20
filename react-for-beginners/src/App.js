import Home from './route/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './route/Details';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/movie">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
