import React from 'react';
import './App.css';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import Main from './components/Main/Main'
import Folder from './components/Folder/Folder'
import Note from './components/Note/Note'
import Header from './components/Header/Header'
import AppContext from './AppContext'

const baseurl = 'http://localhost:9090'
export default class App extends React.Component {


  state = {
    "folders": [],
    "notes": []
  }

  handleFolderClicked = (folder) => {
    console.log(folder)
  
  } 

  componentDidMount() {
    // fake date loading from API call
    return Promise.all([
        fetch(`${baseurl}/folders`),
        fetch(`${baseurl}/notes`)
    ])
        .then(([folderRes,NoteRes]) => Promise.all([folderRes.json(),NoteRes.json()]))
        .then(([folders,notes]) => {
            this.setState({folders, notes})
        })

}

handleDeleteClicked(note) {
  return fetch(`${baseurl}/notes/${note.id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    })
    .then(filteredState => {
      return this.state.notes.filter(noteItem => noteItem.id !== note.id)
    })
    .then(newNotes => {
      this.setState({
        notes: newNotes
      })
    })
}
 


folderNav = () => {
  return (
    <nav className="folder-nav">
      <ul className="nav-list">
        {this.state.folders.map((folder,index) => {
          return(
            <li key={folder + index}className="folder-nav-item"><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>)})
        }
      </ul>
      <button type="button">Add folder</button>
    </nav>
    )
  }

  noteNav = (currentNote) => {
    let currentFolderId = currentNote.folderId
    return (
      <section>
        <Link to={`/folder/${currentFolderId}`}>
          <button type="button" className="back-button">
          Go Back
          </button> 
        </Link>
        
      </section>
    )
  }

  noteItem = (note,index) => {
    return (                        
    <li key={note.name + index}className="note-item"><Link to={`/note/${note.id}`}>{note.name}</Link>
      <h3>{note.name}</h3>
      <p>Date modified: {note.modified}</p>
      
      <Link to='/'><button type="button" onClick={() => this.handleDeleteClicked(note)}>Delete</button></Link>
    </li>


    )}

    expandedNote = (note,index) => {
      return (                        
      <li key={note.name + index}className="note-item"><Link to={`/note/${note.id}`}>{note.name}</Link>
        <h3>{note.name}</h3>
        <p>Date modified: {note.modified}</p>
      <p>{note.content}</p>
      <Link to='/'><button type="button" onClick={() => this.handleDeleteClicked(note)}>Delete</button></Link>
      </li>
  
  
      )}
  
  
  render() {
  return (
//Create note app
//Three routes
    //Main route shows when path is / shows full list of notes, and a folder sidebar
    //Folder route shows when path is /folder/<folder-id>.  Main section display only notes in the main folder and sidebar highlights current folder selected
    //Dynamic route note 
    <AppContext.Provider value = {{
      folders: this.state.folders,
      notes: this.state.notes
    }}>
    <div>
      <Header />
      <Route path="/" render={(routerProps) => <Main 
        navbar={this.folderNav}
        note={this.noteItem}
        data={this.state}
      />} exact />
      <Route path="/folder/:folderid" render={(routerProps) => {
        console.log(routerProps.match.params.folderid)
        return <Folder
        navbar={this.folderNav}
        note={this.noteItem}
        data={this.state}
        currentFolder={routerProps.match.params.folderid}
      />}} exact />
      <Route path="/note/:noteid" render={(routerProps) => {
        console.log(routerProps)
        return <Note
        navbar={this.noteNav}
        note={this.expandedNote}
        //currentFolder={this.state.notes.folderId}
        currentNoteId={routerProps.match.params.noteid}
      />}} exact />
      {/* <Route path="/folder/<with-a-folder-id-here>" component={Folder} exact />
      <Route path="/note/<with-a-note-id-here>" component={Note} exact/>
      <Main 
        navbar={this.folderNav}
        note={this.noteItem}
        data={this.state}
      />
      <Folder
        navbar={this.folderNav}
        note={this.noteItem}
        data={this.state}
      />
      <Note 
        navbar={this.noteNav}
        data={this.state}
        note={this.noteItem}
      /> */}
    </div>
    </AppContext.Provider>
  )}
}
