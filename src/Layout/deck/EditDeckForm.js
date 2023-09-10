import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import { updateDeck } from "../../utils/api";


function EditDeckForm({deck}) { 
    const history = useHistory();
    function handleHomeClick() {
        history.push("/decks/:deckId");
    }


    const [formData, setFormData] = useState(deck);

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
        updateDeck(formData)
        history.go(0);
        
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

export default EditDeckForm;