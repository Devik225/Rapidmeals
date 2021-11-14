import React from 'react'
import "./CSS/Restaurant.css"
import Navbar from './Navbar';
import Heading from './Heading';
import Restro_card from './Restro_card';

function Restaurant() {
    return (
        <div>
            <Navbar/>
            <Heading name={"Restaurants"}/>
            <div className="cards_container">
                <Restro_card/>
                <Restro_card/>
                <Restro_card/>
                <Restro_card/>
                <Restro_card/>
                <Restro_card/>
                <Restro_card/>
            </div>
        </div>
    )
}

export default Restaurant
