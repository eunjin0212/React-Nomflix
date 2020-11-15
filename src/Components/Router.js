import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
// eslint-disable-next-line
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route
          path="https://eunjin0212.github.io/react-nomflix/"
          exact
          component={Home}
        />
        <Route
          path="https://eunjin0212.github.io/react-nomflix/tv"
          component={TV}
        />
        <Route
          path="https://eunjin0212.github.io/react-nomflix/search"
          component={Search}
        />
        <Route
          path="https://eunjin0212.github.io/react-nomflix/movie/:id"
          component={Detail}
        />
        <Route
          path="https://eunjin0212.github.io/react-nomflix/show/:id"
          component={Detail}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
