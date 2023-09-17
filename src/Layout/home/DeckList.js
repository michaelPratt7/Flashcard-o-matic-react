import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import {listDecks} from "../../utils/api"

export const DeckList = () => {
    const [decks, setDecks] = useState([]);

useEffect(() => {
    const abortController = new AbortController();
    async function getDecks() {
        const newDecks = await listDecks(abortController.signal);
        setDecks(newDecks);
    }
    getDecks();
    return () => abortController.abort();
}, []);

const list = decks.map((deck) => <Deck deck={deck} />)

return (
<section>{list}</section>

);
}

export default DeckList;