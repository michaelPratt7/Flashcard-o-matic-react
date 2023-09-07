import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import { updateCard } from "../../utils/api";


function EditCardForm({deck, card}) { 
    const history = useHistory();
    function handleHomeClick() {
        history.push("/decks/:deckId");
    }


    const [formData, setFormData] = useState(card);

    useEffect(() => {
        setFormData(card);
      }, [card]);
    
    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateCard(formData)
        
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
            <Link to={`/decks/${deck.id}`}><button OnClick={handleHomeClick}>Cancel</button></Link>
            <Link to={`/decks/${deck.id}`}><button type="submit">Submit</button></Link>
        </form>
    )

}

export default EditCardForm;