import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';

const Page404 = () => (<div>Page 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
