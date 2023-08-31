import React from "react";
import {Route} from "react-router-dom";
import CreateDeckButton from "./CreateDeckButton";
import DeckList from "./DeckList";

export function Home() {

    return (
        <Route exact path="/">
            <CreateDeckButton />
            <DeckList />
        </Route>   
    )
}

export default Home;