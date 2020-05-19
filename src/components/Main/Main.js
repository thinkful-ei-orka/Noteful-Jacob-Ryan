import React from 'react'



export default function Home(props) {
    console.log(props.notes)
    return (
        <div>
            <h1>Main Section</h1>
            {props.navbar()}
        </div>
    );
}