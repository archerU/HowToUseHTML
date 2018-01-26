import React from 'react'
import {Route} from 'react-router-dom';
import Home from './routes/home';


const routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
    </div>
  )
};

export default routes;
