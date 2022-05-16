import React from 'react'
import CTA from './CTA'
import image from '../../assets/girl.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <header className="h-100 mt-5 overflow-hidden container items-center mx-auto">
            <div className="flex flex-col mt-20 justify-center items-center relative">
            <h5 className="font-semibold mb-2"> Hello I'm </h5>
            <h2 className="text-3xl font-bold"> Sawdia Rustam</h2>
            <h5 className=" mb-4"> React Developer</h5>

             <CTA/>
             <HeaderSocials/>
             <div>
                 
                 <img src={image} alt="me" className=" mt-10  rounded-t-full w-80 p-3"/>
                
                 
                 <a href="#contact" className="absolute md:right-10 bottom-10 font-light transform rotate-90 xss:-right-3"> Scroll Down</a>
             </div>

            </div>

           
        </header>
    )
}

export default Header
