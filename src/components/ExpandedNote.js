import React from 'react';

export default function ExpandedNote(props) {
  let note = props.state.notes.find(note => (
    note.id === props.match.params.id
  ))

  const date = new Date(note.modified);
  const dayOfMonth = date.getUTCDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthString = months[date.getMonth()];
  const year = date.getUTCFullYear();
  let dateInHuman = `${dayOfMonth} ${monthString} ${year}`;

  console.log('TESTING');
//props.match.params.id

  return (
    <div className="note-item">
      <h3>{note.name}</h3>
      <p>{dateInHuman}</p>
      <p>{note.content}</p>
    </div>
  )
}