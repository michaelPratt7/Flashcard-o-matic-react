import React, { useState, useEffect } from "react";
import {useHistory, Link} from "react-router-dom";
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
        setFormData(deck);
      }, [deck]);
    
    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createCard(deck.id, formData)
        setFormData({...initialFormState})
        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <table>
                <td htmlFor="front">
                    Front
                    <textarea
                    id="front"
                    name="front"
                    type="text"
                    onChange={handleFormChange}
                    value={formData.front}
                    />
                </td>
                <td htmlFor="back">
                    Back
                    <textarea
                     id="back"
                     name="back"
                     type="text"
                     onChange={handleFormChange}
                     value={formData.back}
                     />
                </td>
            </table>
            <Link to={`/decks/${deck.id}`}><button OnClick={handleHomeClick}>Done</button></Link>
            <button type="submit">Save</button>
        </form>
    )
}

export default CardForm;