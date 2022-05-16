import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
    return (
        <footer className="bg-primary p-5 text-center font-bold mt-5 ">
            <a href="#" className="text-MBlue text-xl font-bold mt-5"> EGATOR</a>

            <ul className="flex flex-wrap flex-col md:flex-row  justify-center gap-3 mb-3 mx-auto mt-5" >
            <li> <a href="#"  className="text-MBlue " >Home</a></li>
            <li> <a href="#about" className="text-MBlue" >About</a></li>
            <li> <a href="#experience" className="text-MBlue" >experience</a></li>
            <li> <a href="#services" className="text-MBlue" >Services</a></li>
            <li> <a href="#portfolio" className="text-MBlue" >portfolio</a></li>
            <li> <a href="#contact" className="text-MBlue" >Contact</a></li>
            </ul>

            <div className=" flex justify-center gap-3 mb-3  ">
                <a href="https://instagram.com" className="text-lightWhite bg-MBlue p-2 rounded-xl flex  hover:bg-transparent hover:text-MBlue "> <FiInstagram/> </a>
                <a href="https://twitter.com" className="text-lightWhite bg-MBlue p-2 rounded-xl flex hover:bg-transparent hover:text-MBlue"> <IoLogoTwitter/> </a>
                <a href="https://facebook.com" className="text-lightWhite bg-MBlue p-2 rounded-xl flex hover:bg-transparent hover:text-MBlue "> <FaFacebookF/> </a>
            </div>
            <div className="mt-5 pt-10">
                <small className="text-MBlue  "> &copy, EGator tutorials. All rights reserved </small>
            </div>
        </footer>
    )
}

export default Footer
