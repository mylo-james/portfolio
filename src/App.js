import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import NotFound from './scenes/NotFound';
import './animations.css';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </>
    );
}

export default App;
