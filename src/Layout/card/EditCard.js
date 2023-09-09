import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import EditCardBread from "../breadcrumbs/EditCardBread";
import CardForm from "./CardForm";

function EditCard() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const [front, setFront] = useState("");
    const [back, setBack] = useState(""); 
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
            setFront(_card.front);
            setBack(_card.back);
        }
        getCard()
        return () => abortController.abort();
    }, [cardId]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateCard(card);
      };

    return (
        <>
        <EditCardBread deck={deck} card={card} />
        <h1>EditCard</h1>
        <CardForm deck={deck}
                  front={front}
                  back={back}
                  setFront={setFront}
                  setBack={setBack}
                  handleFormSubmit={handleFormSubmit} />
        </>

    )

}

export default EditCard;