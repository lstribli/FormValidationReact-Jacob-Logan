import React from 'react';
import Note from './Note';

export default function Main(props) {
  let displayNotes = props.notes.map(note => (
    <Note
      key={note.id}
      id={note.id}
      title={note.name}
      modified={note.modified} />
  ))

  return (
    <div className="main">
      {displayNotes}
    </div>
  )
}