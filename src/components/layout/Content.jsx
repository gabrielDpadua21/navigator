import React from 'react';
import './Content.css';
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/exemples/Home';
import About from '../../views/exemples/About';
import Param from '../../views/exemples/Params';

const App = props => {
   return (
    <main className='Content'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/param/:id" component={Param} />
        </Switch>
    </main>
   )
}

export default App;