import React from 'react'
import Navbar from './Navbar'
import "./CSS/navbar.css"
// CSS inside Navbar.css

function Heading(props) {
    return (
        <div className="section_heading">
            <div className="heading_img"></div>{props.name}
        </div>
    )
}

export default Heading
