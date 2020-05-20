import React from 'react'
import AppContext from '../../AppContext'


export default class Home extends React.Component {
    static contextType = AppContext;
    render() {
        const {notes} = this.context
        return (
            <div>
                <h1>Main Section</h1>
                {this.props.navbar()}
                <ul>
                    {notes.map((note,index) => {
                        return this.props.note(note,index)
                    })}
                </ul>
            </div>
        );
    }
}