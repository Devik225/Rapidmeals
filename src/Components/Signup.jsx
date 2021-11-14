import React from 'react'
import "./CSS/Signup.css"

function Signup() {
    return (
        <div className="container">
            <div className="logo">Rapidmeals.</div>
            <div className="signup_card">
                <div className="left">
                    <div className="left_img"></div>
                </div>
                <div className="right_part">
                    
                    <div className="signup_form">

                        <div className="user_type">
                            <div className="user"><div className="foodie">Explore like a Foodie</div></div>
                            <div className="user"><div className="manager">Manage like a Chef</div></div>
                        </div>
                        <form className="signup_auth">
                            <input type="text" className="input_size" placeholder="Name"></input>
                            <input type="email" className="input_size" placeholder="Email"></input>
                            <input type="password" className="input_size" placeholder="Password"></input>
                            <button className="button_size">Create account</button>
                        </form>
                        
                        <div className="or">or</div>    
                        <button className="google_auth button_size">
                            <div className="google_btn">
                                <div className="google_logo"></div>
                                <div>Continue with Google</div>
                            </div>
                        </button>
                        <div className="signup_login">Already have an account? &nbsp; <span className="login"> Login</span></div> 

                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Signup
