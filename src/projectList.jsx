import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5";
import PriceTagFilter from './filterBy';

const ProjectList = ({ projects ,setFilteredProjects}) => {
    const [showFilter,setShowFilter]=useState(false)
    return (
        <div className='w-full'>
            <div className='md:hidden p-2 border  md:min-w-[90%]  md:max-w-[90%] flex justify-end relative '>
                <IoFilter  onClick={()=>setShowFilter((prev)=>!prev)}/>
                {showFilter && <div className=' absolute z-10 bg-white top-6'><PriceTagFilter projects={projects} setFilteredProjects={setFilteredProjects} /></div>}
            </div>
            <div className="flex flex-wrap justify-center md:min-w-[90%] md:max-w-[90%]">
            {projects.map(project => (
                <div key={project.id} className="w-full p-4 border  hover:bg-gray-100">
                    <div className='flex gap-2 justify-between items-center mb-2'>
                        <div className='flex gap-2 justify-start items-center mb-2'>
                            <h2 className="text-xl font-semibold ">{project.title}</h2>
                            <div className="text-gray-900 text-sm">{project.durations}</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-black  font-bold">{project.currency}  {project.price}</div>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.descriiption}</p>
                    <div className="flex items-center justify-between mb-4">


                    </div>
                    <div>
                        <span className="mr-2 text-gray-700"></span>
                        {project.tags.map(tag => (
                            <span key={tag} className="text-sm font-semibold text-blue-500 mr-2 hover:cursor-pointer">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ProjectList;
