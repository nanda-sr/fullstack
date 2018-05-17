import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage'
import ItemDetail from './components/ItemDetail';

export const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={ItemDetail}/>
    </Switch>
  )
}