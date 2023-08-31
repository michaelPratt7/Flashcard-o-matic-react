import React from "react";
import {useHistory} from "react-router-dom";

function CreateDeckButton() {
const history = useHistory();
    function handleClick() {
        history.push("/decks/new");
    }
    return (
        <button onClick={handleClick}>
            Create Deck
        </button>
    )
}

export default CreateDeckButton;
