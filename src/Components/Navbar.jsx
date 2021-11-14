import React from 'react';
import"./CSS/navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="left_nav">
                <div className="logo">Rapidmeals.</div>
                <form className="form">
                    <input placeholder="Enter Location"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="right_nav">
                <div className="order">Order<div className="dropdown nav_icon_img"></div></div>
                <div className="notification nav_icon_img"></div>
                <div className="profile nav_icon_img"></div>
            </div>
        </div>
    )
}

export default Navbar
