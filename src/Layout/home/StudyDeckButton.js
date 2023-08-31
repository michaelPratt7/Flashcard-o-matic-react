import React from "react";
import {useHistory} from "react-router-dom";

function StudyDeckButton() {
const history = useHistory();
    function handleClick() {
        history.push("/decks/:deckId/study");
    }
    return (
        <button onClick={handleClick}>
            Study
        </button>
    )
}

export default StudyDeckButton;