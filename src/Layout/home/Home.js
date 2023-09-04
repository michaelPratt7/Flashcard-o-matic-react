import React from "react";
import {Route, useHistory} from "react-router-dom";
import DeckList from "./DeckList";

export function Home() {
    const history = useHistory();
    function handleClick() {
        history.push("/decks/new")
    }

    return (
        <>
        <button onClick={handleClick}>
            Create Deck
        </button>
        <Route exact path="/">
            <DeckList />
        </Route> 
        </>
    )
}

export default Home;