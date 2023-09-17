import React from "react";
import {useHistory} from "react-router-dom";

function CardForm({
    deck,
    card,
    setCard,
    handleFormSubmit,
}) {

    const history = useHistory();

    const handleChange = (event) => {
        setCard({
            ...card,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <div htmlFor="front">
                    Front
                    <textarea
                    id="front"
                    name="front"
                    type="text"
                    onChange={handleChange}
                    value={card.front}
                    />
                </div>
                <div htmlFor="back">
                    Back
                    <textarea
                     id="back"
                     name="back"
                     type="text"
                     onChange={handleChange}
                     value={card.back}
                     />
                </div>
            </div>
            <button onClick= {() => history.push(`/decks/${deck.id}`)}>Done</button>
            <button type="submit" onSubmit={handleFormSubmit}>Save</button>
        </form>
    )
}

export default CardForm;