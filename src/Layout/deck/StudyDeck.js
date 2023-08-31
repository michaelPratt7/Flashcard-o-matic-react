import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import StudyView from "../breadcrumbs/StudyView";
import {readDeck} from "../../utils/api";

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
        <StudyView />
        <h1>Study: {deck.name}</h1>
    </section>
)
}

export default StudyDeck;