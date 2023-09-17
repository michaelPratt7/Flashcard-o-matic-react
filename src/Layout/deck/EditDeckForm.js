import React from "react";
import {useHistory, Link} from "react-router-dom";
import { updateDeck } from "../../utils/api";


function EditDeckForm({deck, setDeck}) { 
    const history = useHistory();
    function handleHomeClick() {
        history.push("/decks/:deckId");
    }
    
    const handleFormChange = (event) => {
        setDeck({
            ...deck,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateDeck(deck)
        history.push(`/decks/${deck.id}`);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <table>
                <td htmlFor="name">
                    Name
                    <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleFormChange}
                    value={deck.name}
                    />
                </td>
                <td htmlFor="description">
                    Description
                    <textarea
                     id="description"
                     name="description"
                     type="text"
                     onChange={handleFormChange}
                     value={deck.description}
                     />
                </td>
            </table>
            <Link to={`/decks/${deck.id}`}><button OnClick={handleHomeClick}>Cancel</button></Link>
            <button type="submit">Submit</button>
        </form>
    )

}

export default EditDeckForm;