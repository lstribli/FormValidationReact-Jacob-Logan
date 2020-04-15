import React from 'react';
import Note from './Note';
import Context from './constants/userContext'

export default class FolderList extends React.Component {
  static contextType = Context;

  render() {
    let folderToDisplay = this.props.state.folders.find(folder => (
      folder.id === this.props.match.params.id
    ))

    let displayNotes = this.props.state.notes.filter(note => (
      note.folderId === folderToDisplay.id
    )).map(note => (
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