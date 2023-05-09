import React from "react";
import '../style/navbar.css'

const Navbar = ({ size ,setShow }) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>My shoping</span>
                <div className="cart" onClick={() =>    setShow(false)}>
                    <span>
                        <i class="fa fa-bell"></i>
                    </span>
                    <span>{size}</span>
                </div> 
            </div>
                
        </nav>
    )
}

export default Navbar