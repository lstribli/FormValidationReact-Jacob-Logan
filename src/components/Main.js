import React from 'react';
import Note from './Note';
import Context from './constants/userContext';
export default class Main extends React.Component {
  static contextType = Context;

  render() {
    const { state } = this.context
    let displayNotes = state.notes.map(note => (
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
}