import React from 'react'

export default function Folder (props) {
    let currentFolder = props.currentFolder
    console.log(currentFolder)
    return (
        <div>
            <h1>Folder Section</h1>
            {props.navbar(currentFolder)}
            <ul>
                 {props.data.store.notes.map((note,index) => {
                    if(note.folderId === currentFolder) {
                        return (
                            props.note(note,index)
                        )
                    }
                    return (
                        <></>
                    )
                })
                } 
            </ul>
        </div>
    )
}