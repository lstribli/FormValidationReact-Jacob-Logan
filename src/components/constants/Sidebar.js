import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {
  let folderLinks = props.state.folders.map(folder => (
  <span key={folder.id} className="nav-item">
    <NavLink to={`/folders/${folder.id}`} activeClassName="selected">
      {folder.name}
    </NavLink>
    </span>
  ))

  return(
    <div className="sidebar">
      <nav>
        {folderLinks}
      </nav>
      <button>Add Folder</button>
    </div>
    
  )
}