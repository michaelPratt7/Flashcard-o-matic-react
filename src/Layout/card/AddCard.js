import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import AddCardBread from "../breadcrumbs/AddCardBread";
import { readDeck } from "../../utils/api";
import CardForm from "./CardForm";


function AddCard() { 
    const [deck, setDeck] = useState([]);
    const {deckId} = useParams();
    
    useEffect(() => {
        async function fetchData() {
            const abortController = new AbortController();
            try {
                const response = await readDeck(deckId, abortController.signal);
                console.log("response = ",response)
                setDeck(response);
            } catch (error) {
                console.error("Something went wrong", error);
            }
            return () => {
                abortController.abort();
            };
        }
        fetchData();
    }, []);


return (
    <section>
        <AddCardBread deck={deck} />
        <h1>{deck.name}: Add Card</h1>
        <CardForm deck={deck} />
    </section>
)
}

export default AddCard;