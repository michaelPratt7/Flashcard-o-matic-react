import React, { useState, useEffect } from "react";
import {useHistory, Link} from "react-router-dom";
import { readDeck } from "../../utils/api";
import { createCard } from "../../utils/api";

function CardForm({deck}) {
    const history = useHistory();
    function handleHomeClick() {
        history.push("/decks/:deckId");
    }


    const [formData, setFormData] = useState({
        front: "",
        back: "",
    });

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deck.id, abortController.signal).then(setFormData);
    
        return () => abortController.abort();
    }, [deck.id]);

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createCard(formData)
        
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
                    value={formData.name}
                    />
                </td>
                <td htmlFor="description">
                    Description
                    <textarea
                     id="description"
                     name="description"
                     type="text"
                     onChange={handleFormChange}
                     value={formData.description}
                     />
                </td>
            </table>
            <Link to={`/decks/${deck.id}`}><button OnClick={handleHomeClick}>Cancel</button></Link>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CardForm;