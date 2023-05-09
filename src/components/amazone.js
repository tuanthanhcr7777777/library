import React from "react";
import { useState } from "react";
import list from '../data'
import Card from "./card";
import '../style/amazone.css'

const Amazone = ({ handleClick }) => {

    

    return (
        <section>
            {list.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick}/>
            ))}
        </section>
    )
}

export default Amazone