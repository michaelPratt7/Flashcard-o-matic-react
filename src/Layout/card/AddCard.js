import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import AddCardBread from "../breadcrumbs/AddCardBread";
import { readDeck } from "../../utils/api";
import CardForm from "./CardForm";


function AddCard() { 
    const [deck, setDeck] = useState([]);
    const {deckId} = useParams();
    
    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);
    
        return () => abortController.abort();
    }, [deckId]);


return (
    <section>
        <AddCardBread deck={deck} />
        <h1>Create Deck</h1>
        <CardForm deck={deck} />
    </section>
)
}

export default AddCard;