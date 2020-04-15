import React from 'react';
import Note from './Note';


export default function FolderList(props) {
  let folderToDisplay = props.state.folders.find(folder => (
    folder.id === props.match.params.id
  ))

  let displayNotes = props.state.notes.filter(note => (
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