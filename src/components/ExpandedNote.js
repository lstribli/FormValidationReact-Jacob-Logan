import React from 'react';
import Context from './constants/userContext'
export default class ExpandedNote extends React.Component {
  static contextType = Context;

  render() {
    const { state } = this.context

    let note = state.notes.find(note => (
      note.id === this.props.match.params.id
    ))

    const date = new Date(note.modified);
    const dayOfMonth = date.getUTCDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthString = months[date.getMonth()];
    const year = date.getUTCFullYear();
    let dateInHuman = `${dayOfMonth} ${monthString} ${year}`;




    return (
      <div className="note-item">
        <h3>{note.name}</h3>
        <p>{dateInHuman}</p>
        <p>{note.content}</p>
      </div>
    )
  }
}
