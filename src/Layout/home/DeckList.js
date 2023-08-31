import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import {listDecks} from "../../utils/api"

export const DeckList = () => {
    const [decks, setDecks] = useState([]);

useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks);

    return () => abortController.abort();
}, []);

const list = decks.map((deck) => <Deck deck={deck} />)

return (
<section>{list}</section>

);
}

export default DeckList;