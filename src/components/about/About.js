import React from 'react'
import image from '..//../assets/girl.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
    return (
        <section id="about">
            <h5> Get to know </h5> 
            <h2> About Me </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-20" >
                <div className=" about_me xss:w-80 mx-auto lg:w-full ">
                    <div className="about_me_img">
                        <img src={image}/>
                    </div>
                </div>
                <div   >
                    <div className="grid xss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 
                        ">
                        <article className=" card hover:bg-transparent border border-primary cursor-default">
                            <FaAward className="mb-3 text-primary text-lg"/>
                            <h5 className="font-bold">experience</h5>
                            <small className="text-sm text-Ash"> 1+ years working</small>
                        </article>
                        <article className="card hover:bg-transparent border border-primary cursor-default">
                            <FiUsers className="mb-3 text-primary text-lg"/> 
                            <h5 className="font-bold"> clients </h5>
                            <small className="text-sm text-Ash"> 2000+ worldwide</small>
                        </article>
                        <article className="card hover:bg-transparent border border-primary cursor-default mr-3">
                            <VscFolderLibrary className="mb-3 text-primary text-lg"/>
                            <h5 className="font-bold"> projects</h5>
                            <small className="text-sm text-Ash"> 80+ completed</small>
                        </article>
                    </div>
                    <p className="my-3 text-Ash">context provides a way to pass data through the component tree 
                        without having to pass props down manually at every level
                        context provides a way to pass data through the component tree
                        without having to pass props down manually at every level.
                         </p>
                         <a href="#contact" className="btn btn-primary"> Let's Talk </a>
                </div>
            </div>
        </section>
    )
}

export default About
