import React from "react";
import {Link} from "react-router-dom";
import StudyDeckButton from "./StudyDeckButton";
import ViewDeckButton from "./ViewDeckButton";
import DeleteDeckButton from "./DeleteDeckButton";

export const Deck = ({deck}) => (
    <article>
        <div className="border flex">
            <h2>{deck.name}</h2>
            <p>{deck.cards.length} cards</p>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}`}><ViewDeckButton /></Link>
            <Link to={`/decks/${deck.id}/study`}><StudyDeckButton /></Link>
            <DeleteDeckButton />
        </div>
    </article>
)

export default Deck;