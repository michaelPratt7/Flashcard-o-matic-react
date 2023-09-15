import React from "react";
import {Link, useHistory} from "react-router-dom";
import {deleteDeck} from "../../utils/api";


export const Deck = ({deck}) =>{ 

    const history = useHistory();

    async function handleDelete() {
        const result = window.confirm("Are you sure you want to delete this deck?");
        if (result) {
          await deleteDeck(deck.id);
        }
        history.go(0);
    }

    return (
    <article>
        <div className="border flex">
            <h2>{deck.name}</h2>
            <p>{deck.cards.length} cards</p>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}`}><button>View</button></Link>
            <Link to={`/decks/${deck.id}/study`}><button>Study</button></Link>
            <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        </div>
    </article>
)}

export default Deck;