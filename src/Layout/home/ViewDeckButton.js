import React from "react";
import {useHistory} from "react-router-dom";

function ViewDeckButton() {
const history = useHistory();
    function handleClick() {
        history.push("/decks/:deckId");
    }
    return (
        <button onClick={handleClick}>
            View
        </button>
    )
}

export default ViewDeckButton;