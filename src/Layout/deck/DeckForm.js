import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { createDeck } from "../../utils/api";

function DeckForm() {
    const history = useHistory();
    function handleHomeClick() {
        history.push("/");
    }

    const initialFormState = {
        name: "",
        description: "",
    }

    const [formData, setFormData] = useState({initialFormState});

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createDeck(formData).then((newDeck) =>
        history.push(`/decks/${newDeck.id}`))
        setFormData({initialFormState})
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
            <button OnClick={handleHomeClick}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    )

}

export default DeckForm;