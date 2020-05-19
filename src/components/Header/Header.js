import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <div>
           <h1><Link to="/">Noteful</Link></h1>
        </div>
    )
}