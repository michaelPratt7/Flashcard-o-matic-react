import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import AddCardBread from "../breadcrumbs/AddCardBread";
import { readDeck, createCard } from "../../utils/api";
import CardForm from "./CardForm";


function AddCard() { 
    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({front:"", back:"",});
    const {deckId} = useParams();
    const history = useHistory();
    
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData() {
            const response = await readDeck(deckId, abortController.signal);
            setDeck(response);
        }
        fetchData();
        return () => abortController.abort();
    }, [deckId]);
 

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await createCard(deckId, card);
        setCard({});
        history.push(`/decks/${deck.id}`);
      };


return (
    <section>
        <AddCardBread deck={deck} />
        <h1>{deck.name}: Add Card</h1>
        <CardForm deck={deck}
                  card={card}
                  setCard={setCard}
                  handleFormSubmit={handleFormSubmit} />
    </section>
)
}

export default AddCard;