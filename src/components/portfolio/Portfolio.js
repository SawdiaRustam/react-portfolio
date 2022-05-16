import React from 'react'
import data from './Data'
const Portfolio = () => {
    return (
       <section id ="portfolio"> 
       <h5> My Recent work</h5>
       <h2> Portfolio</h2>

       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5" >
          {data.map((items)=>{
              const {id,image,title,github} = items
              return(
                <article className="bg-MBlue rounded-xl p-3 border border-solid-primary 
                transition ease-in duration-300 hover:bg-darkBlue " key={id}>
                    <div>
                        <img src={image} className="rounded-xl overflow-hidden" />
                    </div>
                    <h3 className=" my-2 text-xl"> {title}</h3>
                   <div className="flex gap-3 mb-2">
                   <a href={github} className="btn"> Github</a>
                    <a href="#" className="btn btn-primary"> Live Demo</a>
                   </div>
                </article>
              )
          })}
       </div>
       
       </section>
    )
}

export default Portfolio
