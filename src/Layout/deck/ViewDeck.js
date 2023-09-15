import React, { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";
import { readDeck } from "../../utils/api";
import ViewDeckBread from "../breadcrumbs/ViewDeckBread";
import DeleteDeckButton from "./DeleteDeckButton";
import Card from "../card/Card";

function ViewDeck() {
    const [deck, setDeck] = useState([]);
    const [cards, setCards] = useState([]);
    const {deckId} = useParams();
    

    useEffect(() => {
        const abortController = new AbortController();
        async function getDeck() {
            const _deck = await readDeck(deckId, abortController.signal);
            setDeck(_deck);
            setCards(_deck.cards);
        }
        getDeck()
        return () => abortController.abort();
    }, [deckId]);

    const list = cards.map((card) => <Card deck ={deck} card ={card} />)

return (
    <section>
    <ViewDeckBread deck={deck} />
        <div className="deck">
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <Link to={`/decks/${deckId}/edit`}><button>Edit</button></Link>
        <Link to={`/decks/${deckId}/study`}><button>Study</button></Link>
        <Link to={`/decks/${deckId}/cards/new`}><button>Add Cards</button></Link>
        <DeleteDeckButton deck={deck} />
    </div>
    <div className="cards">
        <h1>Cards</h1>
        <div>{list}</div>
    </div>

    </section>
)
}

export default ViewDeck;