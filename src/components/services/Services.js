import React from 'react'
import {BiCheck} from 'react-icons/bi'
import ServiceContain from './ServiceContain'
const Services = () => {
    return (
       <section id="services">
           <h5> What  I offer</h5>
           <h2> services </h2>

           <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 
           lg:grid-cols-3 gap-3 hover:bg-transparent hover:border-MBlue cursor-default">
               <article className="bg-MBlue border border-blue-300 h-full transition duration-400 transition-all rounded-b-xl">
                   <div className ="bg-primary p-2 rounded-b-xl shadow-md text-center"> 
                       <h3 className="text-MBlue font-bold "> UI/UX Design</h3>
                   </div>
                   <ul className="p-5">
                       <ServiceContain/>
                       <ServiceContain/>
                       <ServiceContain/>
                       <ServiceContain/>
                       <ServiceContain/>
                       <ServiceContain/>
               
                   </ul>
               </article>
               <article className="bg-MBlue border border-blue-300  transition duration-400 rounded-b-xl">
                   <div className ="bg-primary p-2 rounded-b-xl shadow-md text-center"> 
                       <h3 className="text-MBlue font-bold "> UI/UX Design</h3>
                   </div>
                   <ul className="p-5">
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/>
                   </ul>
               </article>
               <article className="bg-MBlue border border-blue-300 h-full transition duration-400 transition-all rounded-b-xl">
                   <div className ="bg-primary p-2 rounded-b-xl shadow-md text-center"> 
                       <h3 className="text-MBlue font-bold "> UI/UX Design</h3>
                   </div>
                   <ul className="p-5">
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/> 
                   <ServiceContain/>
                   <ServiceContain/>
                   <ServiceContain/>
                   </ul>
               </article>
           </div>
       </section>
    )
}

export default Services
