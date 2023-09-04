import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./home/Header";
import NotFound from "./home/NotFound";
import Home from "./home/Home";
import StudyDeck from "./deck/StudyDeck";
import CreateDeck from "./deck/CreateDeck";
import ViewDeck from "./deck/ViewDeck";
import EditDeck from "./deck/EditDeck";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <NotFound />
          </Switch>
      </div>
    </>
  );
}

export default Layout;
