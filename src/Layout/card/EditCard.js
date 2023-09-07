import React, { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import { readDeck, readCard } from "../../utils/api";
import EditCardBread from "../breadcrumbs/EditCardBread";
import EditCardForm from "./EditCardForm";

function EditCard() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const {deckId} = useParams();
    const {cardId} = useParams();
    

    useEffect(() => {
        const abortController = new AbortController();
        async function getDeck() {
            const _deck = await readDeck(deckId, abortController.signal);
            setDeck(_deck);
        }
        getDeck()
        return () => abortController.abort();
    }, [deckId]);

    useEffect(() => {
        const abortController = new AbortController();
        async function getCard(){
            const _card = await readCard(cardId, abortController.signal);
            setCard(_card);
        }
        getCard()
        return () => abortController.abort();
    }, [cardId]);

    return (
        <>
        <EditCardBread deck={deck} card={card} />
        <h1>EditCard</h1>
        <EditCardForm deck={deck} card={card} />
        </>

    )

}

export default EditCard;