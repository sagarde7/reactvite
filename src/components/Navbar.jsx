import React from 'react'
import { useEffect } from 'react'
import "./Navbar.css"

const Navbar = (props) => {
    useEffect(() => {
    
        alert("this is 3rd effect");
          
        }, [props.color])
    return (

        <>
            <p className="col">MY COLOR IS  {props.color}</p>
            <div className="container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Next</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
