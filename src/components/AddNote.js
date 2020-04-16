import React from 'react';
import Context from './constants/userContext';


//on add note, the CUID of the parent folder is copied to the folderId: property of the note
export default class AddNote extends React.Component {
  static contextType = Context;


  render() {
    return (

      <div>
        <form>

        </form>
        <button>Add Note</button>
      </div>



    )
  }
}