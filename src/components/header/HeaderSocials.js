import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
    return (
        <div className="flex flex-col items-center gap-3 absolute lg:left-0 bottom-3 header_socials xss:left-0 sm:left-10 " >
            <a href="https://linkedin.com" target="_blank">
            <BsLinkedin/>
            </a>
            <a href="https://github.com" target="_blank"> <FaGithub/> </a>
            <a href="https://dribble.com" target="_blank"> <FiDribbble/></a>
        </div>
    )
}

export default HeaderSocials
