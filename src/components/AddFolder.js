import React from 'react';
import Context from './constants/userContext';
// import { Link } from 'react-router-dom';

export default class AddFolder extends React.Component {
  static contextType = Context;
  state = {
    test: '',
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

  render() {
    // console.log('name val:', this.state.name.value)
    const { handleAddFolder } = this.context;
    return (
      <div>
        <form >
          <label htmlFor="addFolder"><h2>Folder Name</h2></label>
          <input id="addFolder" type="text" value={this.state.name.value} placeholder="input folder name" onChange={e => this.setState({name:{value: e.target.value}})}></input>
        </form>
        {/* <div>  <Link to={`/folder/${this.props}`}>Expand Me</Link></div> */}
        <button onClick={(e) => { handleAddFolder(this.state.name.value) }}>Add Folder</button>
      </div>



    )
  }
}