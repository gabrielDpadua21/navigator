import React from 'react';
import './Content.css';
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/exemples/Home';
import About from '../../views/exemples/About';
import Param from '../../views/exemples/Params';
import NotFound from '../../views/exemples/NotFound';

const App = (props: any) => {
   return (
    <main className='Content'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/param/:id" component={Param} />
            <Route path="*" component={NotFound} />
        </Switch>
    </main>
   )
}

export default App;