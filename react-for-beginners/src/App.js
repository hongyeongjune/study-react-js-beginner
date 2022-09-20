import Home from './route/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './route/Details';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/movie/:id">
                    <Details />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
