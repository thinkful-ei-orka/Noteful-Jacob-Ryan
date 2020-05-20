import React from 'react'
import AppContext from '../../AppContext'

export default class Folder extends React.Component {
    static contextType = AppContext;
    render() {
    let currentFolder = this.props.currentFolder
    console.log(currentFolder)
    return (
        <div>
            <h1>Folder Section</h1>
            {this.props.navbar(currentFolder)}
            <ul>
                 {this.props.data.notes.map((note,index) => {
                    if(note.folderId === currentFolder) {
                        return (
                            this.props.note(note,index)
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
}}