import React from 'react'

export default function Note(props) {
    let currentFolder = props.data.store.folders.find(folder => folder.id ===props.data.selected.folder)
    console.log(currentFolder)
    return (
        <div>
            <h1>Note Section</h1>
            {props.navbar()}
        </div>
    )
}