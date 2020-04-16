import React from 'react';
import Context from './constants/userContext';

//on add note, the CUID of the parent folder is copied to the folderId: property of the note
export default class AddNote extends React.Component {
  static contextType = Context;
  state = {
    name: '',
    touched: false,
    folderId: '',
    content: ''
  }
  updateName(name) {
    this.setState({ name: { value: name } })
  }

  handleSubmitNote(e) {
    e.preventDefault();
    const { name } = this.state
  }

  // setNoteFolderId() {
  //   let folders = folders.map(folder => (this.setState({ folderId: folder.id })))

  // }

  render() {
    const { handleAddNote, folders } = this.context;
    console.log(this.state)
    let folderId = folders.map(folder => <option value={folder.id}> </option>)
    return (
      < div className="addNote" >
        <div>
          <form onSubmit={(e) => handleAddNote(e)}>
            <label htmlFor="addNote"><h2>addnewnote</h2></label>
            <input name="noteName" id="addNote" type="text" value={this.state.name} placeholder="input Note name" onChange={e => this.setState({ name: e.target.value })}></input>
            <button type="submit">Add Note</button>
            <select name='folderId' onChange={e => this.setState({ folderId: e.target.value })}>
              {folderId}

            </select>
            <label htmlFor="body"><h4>blarg</h4></label>
            <input name="content" id="addBody" type="text" value={this.state.body} placeholder="your blargs go here" onChange={e => this.setState({ content: e.target.value })}>
            </input>
          </form>

        </div>
      </div >



    )
  }
}