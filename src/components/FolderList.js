import React from 'react';
import Note from './Note';
import Context from './constants/userContext'
import AddNote from './AddNote'
export default class FolderList extends React.Component {
  static contextType = Context;


  render() {

    const { folders, notes } = this.context
    let folderToDisplay = folders.find(folder => (
      folder.id === this.props.match.params.id
    ))

    let displayNotes = notes.filter(note => (
      note.folderId === folderToDisplay.id
    )).map(note => (
      <Note
        key={note.id}
        id={note.id}
        title={note.name}
        modified={note.modified}
        history={this.props.history}
      />

    ))

    return (
      <div className="main">
        <h2>test</h2>
        {displayNotes}
        <AddNote />

      </div>
    )
  }

}