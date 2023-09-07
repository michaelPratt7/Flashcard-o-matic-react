import React from "react";
import {Link} from "react-router-dom";
import EditCardButton from "./EditCardButton"
import DeleteCardButton from "./DeleteCardButton";

const Card = ({deck, card}) => {
    return (
        <article>
            <div className="border flex">
            <p>{card.front}</p>
            <p>{card.back}</p>
            <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}><EditCardButton /></Link>
            <DeleteCardButton card={card}/>
            </div>

            </article>
    )

}

export default Card;