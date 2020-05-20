import React from 'react'

export default function Note(props) {
    //let currentFolder = 
    let currentNote = props.data.notes.find(note => note.id === props.currentNoteId)
    console.log(currentNote)
    return (
        <div>
            <h1>Note Section</h1>
            {props.navbar()}
            {/* <p>{currentFolder.name}</p> */}
            {props.note(currentNote,currentNote.id)}
        </div>
    )
}