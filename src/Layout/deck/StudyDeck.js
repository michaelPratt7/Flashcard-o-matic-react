import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
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
   const history = useHistory();
   

   
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
    setCurrentPos(currentPos + 1)
    setIsFlipped(!isFlipped)
    if (currentPos !== deckLength) setCard(deck.cards[currentPos])
    else {
        const result = window.confirm("Restart Cards?", "Click 'cancel' to return to home page");
        if (!result) history.push("/");
        else {
            setCard(deck.cards[1]);
            setCurrentPos(1);
            setIsFlipped(false);
        } 
    }
}


return (
    <section>
        <StudyBread deck={deck} />
        <h1>Study: {deck.name}</h1>
        <div>
           <p>Card {currentPos} of {deckLength}</p>
           <div className="cards"> 
           {deckLength > 2 && <StudyCard card={card} isFlipped={isFlipped} FlipHandler={FlipHandler} NextCardHandler={NextCardHandler} />}
           {deckLength <= 2 && <>
           <h1>Not enough cards</h1> 
           <p>You need at least 3 cards to study. There are {deckLength} cards in this deck.</p>
           <Link to={`/decks/${deckId}/cards/new`}><button>Add Cards</button></Link>
           </>}
           </div>
           
        </div>
        
    </section>
)
}

export default StudyDeck;