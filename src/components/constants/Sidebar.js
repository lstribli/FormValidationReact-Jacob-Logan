import React from 'react';
import { NavLink } from 'react-router-dom';
import Context from './userContext';
import AddFolder from '../AddFolder';
import AddNote from '../AddNote';
export default class Sidebar extends React.Component {
  static contextType = Context;
  render() {
    const { folders } = this.context
    let folderLinks = folders.map(folder => {
      console.log('folder', folder.id);
      return <span key={folder.id} className="nav-item">
        <NavLink to={`/folders/${folder.id}`} activeClassName="selected">
          {folder.name}
        </NavLink>
      </span>
    })


    return (
      <div className="sidebar">
        <nav>
          {folderLinks}
        </nav>
        <AddFolder />
        <AddNote />
      </div>

    )
  }

}