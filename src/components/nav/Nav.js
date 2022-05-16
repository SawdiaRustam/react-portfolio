import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine}  from 'react-icons/ri'





const Nav = () => {
    return (
        <nav >
            <a href="#"  className="rounded-lg bg-transparent font-bold flex p-1 text-lightWhite hover:bg-Ash  "> <AiOutlineHome/> </a>
            <a href="#about" className="rounded-lg bg-transparent font-bold flex p-1 text-lightWhite hover:bg-Ash  "> <AiOutlineUser/> </a>
            <a href="#experience" className="rounded-lg bg-transparent font-bold flex p-1 text-lightWhite hover:bg-Ash  "> <BiBook/> </a>
            <a href="#services" className="rounded-lg bg-transparent font-bold flex p-1 text-lightWhite hover:bg-Ash  "> <RiServiceLine/> </a>
            <a href="#contact" className="rounded-lg bg-transparent font-bold flex p-1 text-lightWhite hover:bg-Ash  "> <AiOutlineHome/> </a>
        </nav>
    )
}

export default Nav
