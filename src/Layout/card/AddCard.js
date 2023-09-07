import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import AddCardBread from "../breadcrumbs/AddCardBread";
import { readDeck } from "../../utils/api";
import CardForm from "./CardForm";


function AddCard() { 
    const [deck, setDeck] = useState([]);
    const {deckId} = useParams();
    
    useEffect(async () => {
        const abortController = new AbortController();
        const response = await readDeck(deckId, abortController.signal);  
console.log("response = ",response)
setDeck(response);
    
        return () => abortController.abort();
    }, []);


return (
    <section>
        <AddCardBread deck={deck} />
        <h1>Create Deck</h1>
        <CardForm deck={deck} />
    </section>
)
}

export default AddCard;