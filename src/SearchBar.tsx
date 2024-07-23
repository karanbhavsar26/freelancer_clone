import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { projectData } from './store/MainSlice';

function SearchBar({ projects, setFilteredProjects }) {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch=useDispatch()

    const handleSearchChange = (e:any) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
console.log("searchTerm",searchTerm)
if(searchTerm==""){
    dispatch(setFilteredProjects(projectData));

}
else{
    filterProjects(searchTerm);

}
    };
console.log("searchTerm",searchTerm)
    const filterProjects = (term) => {
        const filteredProjects = projects.filter(project => {
            const { title, descriiption, tags } = project;
            return (
                title.toLowerCase().includes(term.toLowerCase()) ||
                descriiption.toLowerCase().includes(term.toLowerCase()) ||
                tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
            );
        });
        console.log("filteredProjects",filteredProjects)
        dispatch(setFilteredProjects(filteredProjects));
    };

    return (
        <div className="flex items-center justify-center border border-gray-300 shadow-md px-4 py-2 w-[90%]">
            <div className="mr-2">
                {/* Search Icon */}
                <CiSearch size={24} />
            </div>
            <input type="text" value={searchTerm} onChange={(e)=>handleSearchChange(e)} className="w-full focus:outline-none" placeholder="Search Keyword" />
            <button onClick={()=>handleSearchSubmit()} className="bg-blue-500 text-white border-0">Search</button>
        </div>
    );
}

export default SearchBar;
