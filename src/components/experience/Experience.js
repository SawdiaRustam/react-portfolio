import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
    return (
        <section id="experience">
            <h5> What Skills i have </h5>
            <h2> My Experience </h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-MBlue py-3 px-5 rounded-xl border border-transparent 
                hover:bg-transparent hover:border hover:border-primary hover:cursor-default ">
                    <h3 className="text-center mb-3 text-primary"> frontend developer</h3>
                    <div className="grid grid-cols-2 row-gap-5">
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Html </h4>
                        <small className="text-sm text-Ash"> Experienced</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Css</h4>
                        <small className="text-sm text-Ash"> Experienced</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> javascript </h4>
                        <small className="text-sm text-Ash"> intermediate</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Tailwind </h4>
                        <small className="text-sm text-Ash"> Experienced</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Bootstrap</h4>
                        <small className="text-sm text-Ash"> Experienced</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> React </h4>
                        <small className="text-sm text-Ash"> intermediate</small>
                        </div>
                        </article>
                    </div>


                </div>
                <div className="bg-MBlue py-3 px-5 rounded-xl border border-transparent 
                hover:bg-transparent hover:border hover:border-primary hover:cursor-default ">
                    <h3 className="text-center mb-3 text-primary"> Backend developer</h3>
                    <div className="grid grid-cols-2 row-gap-5">
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Node js</h4>
                        <small className="text-sm text-Ash"> Experienced</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> PHP</h4>
                        <small className="text-sm text-Ash">intermediate</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Python </h4>
                        <small className="text-sm text-Ash"> intermediate</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Mongodb </h4>
                        <small className="text-sm text-Ash">Basic</small>
                        </div>
                        </article>
                        <article className="flex gap-1">
                        <BsPatchCheckFill className="mt-1 text-primary"/>
                        <div>
                        <h4> Mysql</h4>
                        <small className="text-sm text-Ash"> Experienced</small>
                        </div>
                        </article>
                        
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Experience
