import React from 'react'
import "./CSS/Outlet.css"
import Navbar from './Navbar';
import Heading from './Heading';

function Outlet() {
    return (
        <div>
            <Navbar/>
            <div className="outlet_name"><div className="outlet_back"></div>Dominos</div>
            <div className="outlet_container">
                <div className="outlet_data">
                    <div className="outlet_img"></div>
                    <div className="food_card_container">

                        <div className="food_card">
                            <div className="food_card_img"></div>
                            <div className="food_card_info">
                                <div className="info_top">
                                    <div className="food_name">Cheese Pizza</div>
                                    <div className="food_rate">₹300</div>
                                    <div className="food_button">
                                        <div className="food_btn_minus"></div>
                                        <div className="food_btn_plus"></div>
                                    </div>
                                </div>
                                <div className="info_bottom">Filled with cheeze competely. 
                                Onion and capsicum cover all over the topping. Will taste 
                                like something you never tasted</div>
                            </div>
                        </div>

                        <div className="food_card">
                            <div className="food_card_img"></div>
                            <div className="food_card_info">
                                <div className="info_top">
                                    <div className="food_name">Cheese Pizza</div>
                                    <div className="food_rate">₹300</div>
                                    <div className="food_button">
                                        <div className="food_btn_minus"></div>
                                        <div className="food_btn_plus"></div>
                                    </div>
                                </div>
                                <div className="info_bottom">Filled with cheeze competely. 
                                Onion and capsicum cover all over the topping. Will taste 
                                like something you never tasted</div>
                            </div>
                        </div>

                        <div className="food_card">
                            <div className="food_card_img"></div>
                            <div className="food_card_info">
                                <div className="info_top">
                                    <div className="food_name">Cheese Pizza</div>
                                    <div className="food_rate">₹300</div>
                                    <div className="food_button">
                                        <div className="food_btn_minus"></div>
                                        <div className="food_btn_plus"></div>
                                    </div>
                                </div>
                                <div className="info_bottom">Filled with cheeze competely. 
                                Onion and capsicum cover all over the topping. Will taste 
                                like something you never tasted</div>
                            </div>
                        </div>

                        <div className="food_card">
                            <div className="food_card_img"></div>
                            <div className="food_card_info">
                                <div className="info_top">
                                    <div className="food_name">Cheese Pizza</div>
                                    <div className="food_rate">₹300</div>
                                    <div className="food_button">
                                        <div className="food_btn_minus"></div>
                                        <div className="food_btn_plus"></div>
                                    </div>
                                </div>
                                <div className="info_bottom">Filled with cheeze competely. 
                                Onion and capsicum cover all over the topping. Will taste 
                                like something you never tasted</div>
                            </div>
                        </div>

                    </div>
                 </div>
                <div className="outlet_cart">
                    <div className="bucket_card">
                        <div className="bucket_heading">Basket</div>
                        <div className="order_data">
                            <div className="rate">Capsicum Pizza</div>
                            <div className="quantity">3</div>
                            <div className="total">600</div>
                        </div>

                        <hr></hr>

                        <div className="checkbox">Total order amount - 1300</div>
                        
                        <div className="checkbox"><input type="checkbox"></input> Cash on delivery </div>
                        <button className="button_order">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Outlet
