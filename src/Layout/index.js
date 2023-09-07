import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./home/Header";
import NotFound from "./home/NotFound";
import Home from "./home/Home";
import StudyDeck from "./deck/StudyDeck";
import CreateDeck from "./deck/CreateDeck";
import ViewDeck from "./deck/ViewDeck";
import EditDeck from "./deck/EditDeck";
import AddCard from "./card/AddCard";
import EditCard from "./card/EditCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
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
          <NotFound />
          </Switch>
      </div>
    </>
  );
}

export default Layout;
