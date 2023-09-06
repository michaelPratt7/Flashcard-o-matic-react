import React from "react";
import {useHistory} from "react-router-dom";
import { deleteCard } from "../../utils/api";

function DeleteCardButton({card}) {
    const history = useHistory();
    async function handleDelete() {
        const result = window.confirm("Are you sure you want to delete this card?");
        if (result) {
          await deleteCard(card.id);
          history.push("/");
        }
    }
    return (
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
    )
}

export default DeleteCardButton;