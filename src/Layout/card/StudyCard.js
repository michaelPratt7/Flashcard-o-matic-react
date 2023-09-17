import React from "react";

function StudyCard({deck, card, isFlipped, FlipHandler, NextCardHandler, currentPos, deckLength }) {
   return (
      <>
      <div>{!isFlipped ? card.front : card.back}</div>
      <button onClick={FlipHandler}>Flip</button>
      {isFlipped && (<button onClick={NextCardHandler}>Next</button>)}
      </>
   )

}

export default StudyCard;