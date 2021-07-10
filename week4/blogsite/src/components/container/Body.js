import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Post from '../pages/post';

export default function Body() {
  return (
    <Body>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
          </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/post">
          <Post />
          </Route>
      </Switch>
    </Body>
  )
}




