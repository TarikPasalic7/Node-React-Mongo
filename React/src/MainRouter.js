import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home,Books,Book, Authors, Author} from './components';

const MainRouter = () =>{


    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/books' component={Books}/>
            <Route exact path='/books/:id' component={Book}/>
            <Route exact path='/authors' component={Authors}/>
            <Route exact path='/authors/:id' component={Author}/>
           
        </Switch>
    )
}

export default MainRouter;