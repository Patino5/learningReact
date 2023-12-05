import { useState } from 'react'

import './App.css'

function Navbar() {
    return (
        <div className="heading">
            <h1>Navbar goes here</h1>
            <ul className='nav'>
                <li>About</li>
                <li>Contact</li>
                <li>Pricing</li>
            </ul>
        </div>
    )
}

export default Navbar