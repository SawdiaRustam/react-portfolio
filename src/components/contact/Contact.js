import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
    return (
        <section id ="contact">
            <h5> Get In touch</h5>
            <h2> Contact Me</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className=" flex flex-col gap-5 lg:w-2/4 mx-5">
                <article  className="bg-MBlue p-3 rounded-xl text-center
                 transition ease-in-out duration-200 
                border border-2 hover:bg-transparent">
                <MdOutlineEmail className="mx-auto"/>
                <h4> Email</h4>
                <h5> sawdia.rustam2000@gmail.com</h5>
                <a href="mailto:sawdia.rustam2000@gmail.com"> send a message</a>
                </article>
                <article className="bg-MBlue p-3 rounded-xl text-center transition ease-in-out duration-200 
                border border-2  hover:bg-transparent">
                <RiMessengerLine className="mx-auto"/>
                <h4>Messenger</h4>
                <h5> sawdia portfolio</h5>
                <a href="#"> send a message</a>
                </article>
                <article className="bg-MBlue p-3 rounded-xl text-center transition ease-in-out duration-200 
                border border-2 hover:bg-transparent ">
                <BsWhatsapp className="mx-auto"/>
                <h4> WhatsApp</h4>
                <h5> +9378123456</h5>
                <a href="#"> send a message</a>
                </article>
                </div>
                {/* end of contact option  */}

                <form action="" className="flex flex-col gap-5 ">
                    <input className="p-2 rounded-xl border bg-MBlue resize-none  text-lightWhite"  type="text" name ="name" placeholder="your full name" required/>
                    <input  className="p-2 rounded-xl bg-MBlue resize-none text-lightWhite " type="email" name="email" placeholder="Your email" required />
                    <textarea className="p-2 rounded-xl bg-MBlue resize-none  text-lightWhite"  name="message" rows ="7" placeholder="Your Message" required/> 
                    <button type="submit" className="btn btn-primary ">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
