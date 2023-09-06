import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
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

const FlipHandler = () => {
    setIsFlipped(!isFlipped)
   
}

const NextCardHandler = () => {
    const history = useHistory();
    setCurrentPos(currentPos + 1)
    setIsFlipped(!isFlipped)
    if (currentPos !== deckLength) setCard(deck.cards[currentPos])
    else {
        const result = window.confirm("Restart Cards?", "Click 'cancel' to return to home page");
        if (!result) history.push("/");
        else {
            setCard(deck.cards[0]);
            setCurrentPos(1);
            setIsFlipped(false);
        } 
    }
}

function NextButton() {
    return (
        <button onClick={NextCardHandler}>Next</button>
    )
}


return (
    <section>
        <StudyBread deck={deck} />
        <h1>Study: {deck.name}</h1>
        <div>
           <p>Card {currentPos} of {deckLength}</p>
           <div>{isFlipped ? card.front: card.back}</div>
           <button onClick={FlipHandler}>Flip</button>
           {!isFlipped && <NextButton />}
        </div>
        
    </section>
)
}

export default StudyDeck;