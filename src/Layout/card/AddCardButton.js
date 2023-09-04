import React from "react";
import {useHistory} from "react-router-dom";

function AddCardButton() {
const history = useHistory();
    function handleClick() {
        history.push("/decks/:deckId/cards/new");
    }
    return (
        <button onClick={handleClick}>
            Add Cards
        </button>
    )
}

export default AddCardButton;