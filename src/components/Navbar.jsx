import React from 'react'
import "./main.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import rohitImg from "../images/rohit_chitampalle.png"
function Navbar() {
    return (
        <div className='mainContainer'>
            <div className='subContainer'>
                <section className='portFolio-container'>
                    <div className='imageContainer'>
                        <img src={rohitImg} alt="ProfilePicture" />
                        <p>Rohit Laxman Chitampalle</p>
                        <p> <span className='text-primary'>FullStack</span>  Engineer in India</p>
                    </div>
                </section>
                <section className='link-container'>
                    <ul>
                        <li className='text-primary'> Home </li>
                        <li> About </li>
                        <li> Service </li>
                        <li> Skills </li>
                        <li> Education </li>
                        <li> Exprience </li>
                        <li> Work</li>
                        <li> Block </li>
                        <li> Contact </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Navbar