import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { readDeck } from "../../utils/api";
import EditDeckBread from "../breadcrumbs/EditDeckBread";
import EditDeckForm from "./EditDeckForm";

function EditDeck() {
    const [deck, setDeck] = useState({});
    const {deckId} = useParams();
    
    useEffect(() => {
        const abortController = new AbortController();
        async function getDeck() {
            const newDeck = await readDeck(deckId, abortController.signal);
            setDeck(newDeck);
        }
        getDeck();
        return () => abortController.abort();
    }, [deckId]);

    return (
        <>
        <EditDeckBread deck={deck} />
        <EditDeckForm deck={deck} setDeck={setDeck} />
        </>
    )
}

export default EditDeck;