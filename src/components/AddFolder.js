import React from 'react';
import Context from './constants/userContext';
import ValidationError from "./constants/ValidationError";
// import { Link } from 'react-router-dom';

export default class AddFolder extends React.Component {
  static contextType = Context;
  state = {
    name: {
      value: '',
      touched: false
    }
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } })
  }

  handleSubmit(e) {
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

  render() {
    const { handleAddFolder } = this.context;
    const nameError = this.validateName();

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="addFolder"><h2>Folder Name</h2></label>
            {this.state.name.touched && <ValidationError message={nameError} />}
            <input id="addFolder" type="text" value={this.state.name.value} placeholder="input folder name"
              onChange={e => this.updateName(e.target.value)} />
            <button onClick={(e) => { handleAddFolder(this.state.name.value) }}
              disabled={
                this.validateName()
              }>Add Folder</button>
          </div>
        </form>

        {/* <div>  <Link to={`/folder/${this.props}`}>Expand Me</Link></div> */}

      </div>



    )
  }
}