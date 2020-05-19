import React from 'react'



export default function Home(props) {
    console.log(props.data.store.notes)
    return (
        <div>
            <h1>Main Section</h1>
            {props.navbar()}
            <ul>
                {props.data.store.notes.map((note,index) => {
                    return props.note(note,index)
                })}
            </ul>
        </div>
    );
}