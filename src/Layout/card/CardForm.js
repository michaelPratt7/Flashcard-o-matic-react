import React from "react";
import {useHistory} from "react-router-dom";

function CardForm({
    deck,
    front,
    setFront,
    back,
    setBack,
    handleFormSubmit,
}) {

    const history = useHistory();

    const handleFrontChange = ({target}) => setFront(target.value);
    const handleBackChange = ({target}) => setBack(target.value);


    return (
        <form onSubmit={handleFormSubmit}>
            <table>
                <td htmlFor="front">
                    Front
                    <textarea
                    id="front"
                    className="front"
                    type="text"
                    onChange={handleFrontChange}
                    value={front}
                    />
                </td>
                <td htmlFor="back">
                    Back
                    <textarea
                     id="back"
                     className="back"
                     type="text"
                     onChange={handleBackChange}
                     value={back}
                     />
                </td>
            </table>
            <button onClick= {() => history.push(`/decks/${deck.id}`)}>Done</button>
            <button type="submit">Save</button>
        </form>
    )
}

export default CardForm;