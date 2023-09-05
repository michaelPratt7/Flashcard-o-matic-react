import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import StudyBread from "../breadcrumbs/StudyBread";
import {readDeck} from "../../utils/api";
import StudyCard from "../card/StudyCard";

function StudyDeck() {
   const [deck, setDeck] = useState([]);
   const [card, setCard] = useState({});
   const [isFlipped, setIsFlipped] = useState(false);
   const [deckLength, setDeckLength] = useState(0);
   const [currentPos, setCurrentPos] = useState(1);
   const {deckId} = useParams();

   
   useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
        const _deck = await readDeck(deckId, abortController.signal);
        setDeck(_deck);
        setCard(_deck.cards[0]);
        setDeckLength(_deck.cards.length);
        setIsFlipped(false);
    }
    getDeck()
    return () => abortController.abort();
}, [deckId]);

const flipHandler = () => {
    setIsFlipped(!isFlipped)
}


return (
    <section>
        <StudyBread deck={deck} />
        <h1>Study: {deck.name}</h1>
        <StudyCard deck={deck} />
        
    </section>
)
}

export default StudyDeck;