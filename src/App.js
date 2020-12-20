import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

const Home = lazy(() => import('./containers/Home/Home'));
const About = lazy(() => import('./containers/About/About'));

const App = () => {

  const links = [
    {
      id: 0,
      title: 'Home',
      path: '/',
      eact: true
    },
    {
      id: 1,
      title: 'About',
      path: '/about',
      exact: false
    }
  ];

  return (
    <div className="App">
      <Header navigation={links}/>
      <Suspense>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Redirect to="/"/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
