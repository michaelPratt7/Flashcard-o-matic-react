import React, { useState, useEffect } from "react";
import {useHistory, Link} from "react-router-dom";
import { readDeck } from "../../utils/api";
import { createCard } from "../../utils/api";

function CardForm({deck}) {
    const history = useHistory();
    function handleHomeClick() {
        history.push("/decks/:deckId");
    }

    const initialFormState = {
        front: "",
        back: "",
    }

    const [formData, setFormData] = useState({...initialFormState});


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
        setFormData({...initialFormState})
        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <table>
                <td htmlFor="front">
                    Name
                    <textarea
                    id="front"
                    name="front"
                    type="text"
                    onChange={handleFormChange}
                    value={formData.front}
                    />
                </td>
                <td htmlFor="back">
                    Description
                    <textarea
                     id="back"
                     name="back"
                     type="text"
                     onChange={handleFormChange}
                     value={formData.back}
                     />
                </td>
            </table>
            <Link to={`/decks/${deck.id}`}><button OnClick={handleHomeClick}>Cancel</button></Link>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CardForm;