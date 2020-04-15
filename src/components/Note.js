import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {

  const date = new Date(props.modified);
  const dayOfMonth = date.getUTCDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthString = months[date.getMonth()];
  const year = date.getUTCFullYear();
  let dateInHuman = `${dayOfMonth} ${monthString} ${year}`;

  return (
    <div className="main">
      <div id={props.id} className="note-item" >
        <h2>{props.title}</h2>
        <Link to={`note/${props.id}`}>Expand Me</Link>
        <p>{dateInHuman}</p>
      </div>
    </div>
  )
}