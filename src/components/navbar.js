import React from "react";
import '../style/navbar.css'
import { useState } from "react";
import list from "../data";
import Search from "./search";


const Navbar = ({ size ,setShow }) => {



    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>My shoping</span>
                <Search />
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <i class="fa fa-bell-o"></i>
                    </span>
                    <span>{size}</span>
                </div> 
            </div>
                
        </nav>
    )
}

export default Navbar