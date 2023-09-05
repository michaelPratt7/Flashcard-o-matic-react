import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import StudyBread from "../breadcrumbs/StudyBread";
import {readDeck} from "../../utils/api";
import StudyCard from "../card/StudyCard";

function StudyDeck() {
   const [deck, setDeck] = useState([]);
   const {deckId} = useParams();

   useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);

    return () => abortController.abort();
}, [deckId]);

return (
    <section>
        <StudyBread deck={deck} />
        <h1>Study: {deck.name}</h1>
        <StudyCard deck={deck} />
        
    </section>
)
}

export default StudyDeck;