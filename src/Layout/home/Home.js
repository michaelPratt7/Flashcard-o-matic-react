import React from "react";
import {Link} from "react-router-dom";
import DeckList from "./DeckList";

export function Home() {

    return (
        <>
        <Link to="/decks/new"><button>Create Deck</button></Link>
        <DeckList />
        </>
    )
}

export default Home;