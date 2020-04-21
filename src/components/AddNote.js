import React from 'react';
import Context from './constants/userContext';
import ValidationError from './constants/ValidationError';
//on add note, the CUID of the parent folder is copied to the folderId: property of the note
export default class AddNote extends React.Component {
  static contextType = Context;
  state = {
    name: {
      value: '',
      touched: false
    },

    folderId: '',
    content: '',
    modified: ''
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } })
  }

  handleSubmitNote(e) {
    e.preventDefault();
    const { name } = this.state
    this.validateName();
  }
  validateName() {
    const name = this.state.name.value.trim();
    console.log('validateName: running');
    if (name.length === 0) {
      return 'Name is required';
    } else if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
  }
  // setNoteFolderId() {
  //   let folders = folders.map(folder => (this.setState({ folderId: folder.id })))

  // }

  render() {
    const { handleAddNote, folders } = this.context;
    const nameError = this.validateName();
    console.log('ADDNOTE RENDER: folderName=', this.state.name.value)
    console.log(this.state)
    console.log('RENDER: CONSOLE>LOG THIS.VALIDATENAME', this.validateName());
    let folderId = folders.map(folder => <option value={folder.id}> {folder.name} </option>)
    return (
      < div className="addNote" >
        <div>
          <form onSubmit={(e) => handleAddNote(e)}>
            <div>
              <label htmlFor="addNote"><h2>addnewnote</h2></label>
              <input name="noteName" id="addNote" type="text" value={this.state.name.value} placeholder="input Note name"
                onChange={e => this.setState({ name: { value: e.target.value, touched: true } })} />
              {this.state.name.touched && <ValidationError message={nameError} />}
              <button type="submit"
                disabled={
                  this.validateName()
                }
              >Add Note</button>


              <select name='folderId' onChange={e => this.setState({ folderId: e.target.value })}>
                {folderId}

              </select>
              <label htmlFor="body"><h4>blarg</h4></label>
              <input name="content" id="addBody" type="text" value={this.state.body} placeholder="your blargs go here" onChange={e => this.setState({ content: e.target.value })}>
              </input>
            </div>
          </form>

        </div>
      </div >



    )
  }
}