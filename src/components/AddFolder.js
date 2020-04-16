import React from 'react';
import Context from './constants/userContext';
// import { Link } from 'react-router-dom';

export default class AddFolder extends React.Component {
  static contextType = Context;
  state = {
    name: {
      value: '',
      touched: false
    }
  }
  //form submits a name of a new folder, then POSTS the to the /folders endpoint on the server
  //add routing for AddFolder component
  //add API for the Add Folder Component

  //form onsubmnit calls the new POST API function
  //after the new folder has posted, the form will unmount 

  //assign a CUID to the folder
  updateName(name) {
    this.setState({ name: { value: name } })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(name.value);
    const { name } = this.state
    console.log(name.value);
  }
  render() {
    const { handleAddFolder } = this.context;
    console.log(this.context)
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="addFolder"><h2>Folder Name</h2></label>
          <input id="addFolder" type="text" value={this.state.name.value} placeholder="input folder name" onChange={e => this.updateName(e.target.value)}></input>
        </form>
        {/* <div>  <Link to={`/folder/${this.props}`}>Expand Me</Link></div> */}
        <button onClick={(e) => { handleAddFolder(this.state.name.value) }}>Add Folder</button>
      </div>



    )
  }
}