import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import NotFound from './scenes/NotFound';
import './animations.css';
import { createContext, useState } from 'react';
export const ScrollContext = createContext();

function App() {
    const [yAxis, setYAxis] = useState();

    return (
        <ScrollContext.Provider value={{ yAxis }}>
            <div className='app' onScroll={(e) => setYAxis(e.target.scrollTop)}>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </ScrollContext.Provider>
    );
}

export default App;
