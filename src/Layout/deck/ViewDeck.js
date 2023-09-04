import React, { useEffect, useState } from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import { readDeck } from "../../utils/api";
import ViewDeckBread from "../breadcrumbs/ViewDeckBread";
import StudyDeckButton from "../home/StudyDeckButton";
import AddCardButton from "../card/AddCardButton";
import DeleteDeckButton from "./DeleteDeckButton";

function ViewDeck() {
    const [deck, setDeck] = useState([]);
    const {deckId} = useParams();
    const history = useHistory();

    function handleEditClick() {
        history.push(`/decks/${deckId}/edit`)
    }

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);
    
        return () => abortController.abort();
    }, [deckId]);

return (
    <section>
    <ViewDeckBread deck={deck} />
    <div>
    <h2>{deck.name}</h2>
    <p>{deck.description}</p>
    <button onClick={handleEditClick}>Edit</button>
    <Link to={`/decks/${deckId}/study`}><StudyDeckButton /></Link>
    <Link to={`/decks/${deckId}/cards/new`}><AddCardButton /></Link>
    <DeleteDeckButton />
    
    </div>

    </section>
)
}

export default ViewDeck;