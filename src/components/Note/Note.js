import React from 'react'
import AppContext from '../../AppContext'

export default class  Note extends React.Component {
    //let currentFolder = 
    static contextType = AppContext;
    render() {
    const {notes} = this.context
    console.log(notes)
    if (notes.length === 0) {
        return <p>Loading...</p>
    }
    let currentNote = notes.find(note => note.id === this.props.currentNoteId)
    console.log(currentNote)
    return (
        <div>
            <h1>Note Section</h1>
            {this.props.navbar(currentNote)}
            {/* <p>{currentFolder.name}</p> */}
            {this.props.note(currentNote,currentNote.id)}
        </div>
    )
    }
}