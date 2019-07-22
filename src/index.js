import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-virtualized/styles.css'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import Students from './components/Home'
import Menu from './components/Menu'



const routing =
  <Router>
     <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Students} />
        <Route path="/menu" component={Menu} />
      </Switch>
  </Router>

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
