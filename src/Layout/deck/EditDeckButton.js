import React from "react";
import {useHistory} from "react-router-dom";

function EditDeckButton() {
const history = useHistory();
    function handleClick() {
        history.push("/decks/:deckId/edit");
    }
    return (
        <button onClick={handleClick}>
            Edit
        </button>
    )
}

export default EditDeckButton;