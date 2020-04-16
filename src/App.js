import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import FolderList from './components/FolderList';
import ExpandedNote from './components/ExpandedNote';
import Header from './components/constants/Header';
import Sidebar from './components/constants/Sidebar';
import Context from './components/constants/userContext';
import AddFolder from './components/AddFolder';
// import AddNote from './components/AddNote';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "folders": [],
      "notes": []
    }
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw Error();
        }
      })
      .then(response => this.setState({ folders: response }))
      .catch(err => console.log(err.message));

    fetch('http://localhost:9090/notes')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw Error();
        }
      })
      .then(response => {
        this.setState({ notes: response });
      }
      )
      .catch(err => console.log(err.message));
  }

  handleDelete = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw Error();
        }
      })
      .then(response => {
        this.setState({
          notes: this.state.notes.filter(note => note.id !== noteId)
        })

      })
      .catch(err => console.log(err.message));
  }


  handleAddFolder = (folder) => fetch('http://localhost:9090/folders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: folder })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        throw Error();
      }
    })
    .then(response => this.setState({ folders: [...this.state.folders, response] }))
    .catch(err => console.log(err.message));
  //build more to addnote component, as its own component
  //fetch('http://localhost:9090/notes',
  handleAddNote = (event) => {
    event.preventDefault();
    fetch('http://localhost:9090/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.noteName.value,
        folderId: event.target.folderId.value,
        content: event.target.content.value,
        modified: Date.now()


      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw Error();
        }
      })
      .then(res => {
        console.log('RESPONSE', res)
        return res
      })
      .then(response => this.setState({ notes: [...this.state.notes, response] })

      )
      .catch(err => console.log(err.message));
  }

  render() {
    console.log('this.state.notes', this.state.notes);

    return (
      <Context.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes,
        handleDelete: this.handleDelete,
        handleAddFolder: this.handleAddFolder,
        handleAddNote: this.handleAddNote
      }}>

        <div className="App">
          <Header />
          <div className="flex-divide">
            <Sidebar state={this.state} />
            <Switch>
              <Route
                exact path='/'
                component={Main}
              />
              <Route
                exact path='/folders/:id'
                component={FolderList}
              />

              <Route
                exact path='/note/:id'
                component={ExpandedNote}
              />
              <Route
                exact path='/folders/:id'
                component={AddFolder}
              />
            </Switch>
          </div>
        </div>

      </Context.Provider>
    );
  }
}