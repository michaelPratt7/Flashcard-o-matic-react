import React from "react";
import {useHistory} from "react-router-dom";

function EditCardButton() {
const history = useHistory();
    function handleClick() {
        history.push("/decks/:deckId/cards/:cardId/edit");
    }
    return (
        <button onClick={handleClick}>
            Edit
        </button>
    )
}

export default EditCardButton;