import React from "react";
import CreateDeckBread from "../breadcrumbs/CreateDeckBread";
import DeckForm from "./DeckForm";

function CreateDeck() { 
return (
    <section>
        <CreateDeckBread />
        <h1>Create Deck</h1>
        <DeckForm />
    </section>
)
}

export default CreateDeck;