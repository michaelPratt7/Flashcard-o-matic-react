import React from "react";
import {Link} from "react-router-dom";

function EditCardBread({deck, card}) {
    return (
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to= "/" className="btn btn-link" >Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to= {`/decks/${deck.id}`} className="btn btn-link" >{deck.name}</Link>
    </li>
      <li className="breadcrumb-item">
        <p>Edit Card {card.id}</p>
      </li>
    </ol>
  </nav>
)}

export default EditCardBread;