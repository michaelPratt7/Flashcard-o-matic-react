import React, { useState, useEffect } from "react";
import {useParams, useHistory} from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import EditCardBread from "../breadcrumbs/EditCardBread";
import CardForm from "./CardForm";

function EditCard() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({}); 
    const {deckId} = useParams();
    const {cardId} = useParams();
    const history = useHistory();
    
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

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await updateCard(card);
        history.push(`/decks/${deck.id}`);
      };

    return (
        <>
        <EditCardBread deck={deck} card={card} />
        <h1>EditCard</h1>
        <CardForm deck={deck}
                  card={card}
                  setCard={setCard}
                  handleFormSubmit={handleFormSubmit} />
        </>

    )

}

export default EditCard;