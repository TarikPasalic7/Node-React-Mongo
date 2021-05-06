import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home,Books,Book} from './components';

const MainRouter = () =>{


    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/books' component={Books}/>
            <Route exact path='/books/:id' component={Book}/>
           
        </Switch>
    )
}

export default MainRouter;