import React from "react";
import {useHistory} from "react-router-dom";
import {deleteDeck} from "../../utils/api";

function DeleteDeckButton() {
    const history = useHistory();
    async function handleDelete(deckId) {
    const result = window.confirm("Are you sure you want to delete this deck?");
    if (result) {
      await deleteDeck(deckId);
      history.push("/");
    }
}
return (
    <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
)
}

export default DeleteDeckButton;