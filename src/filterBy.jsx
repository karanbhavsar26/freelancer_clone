import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { projectData } from './store/MainSlice';

function PriceTagFilter({ projects, setFilteredProjects }) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const dispatch = useDispatch();

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handleTagChange = (tag) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];
        setSelectedTags(updatedTags);
    };

    const handleFilterClick = () => {
        console.log("minPrice",minPrice=="" && maxPrice=="" && selectedTags.length<=0)
        if(minPrice=="" && maxPrice=="" && selectedTags.length<=0){
            dispatch(setFilteredProjects(projectData));
        
        }else{
            filterProjects(minPrice, maxPrice, selectedTags);

        }
    };

    const filterProjects = (min, max, tags) => {
        const filteredProjects = projects.filter(project => {
            const { price, tags: projectTags } = project;
            const isWithinPriceRange = (!min || price >= parseInt(min)) && (!max || price <= parseInt(max));
            const matchesTags = tags.length === 0 || tags.every(tag => projectTags.includes(tag));
            return isWithinPriceRange && matchesTags;
        });
        dispatch(setFilteredProjects(filteredProjects));
    };

    return (
        <div className="flex flex-col items-center gap-4 border border-gray-300 shadow-md p-4 ">
            <div className='flex justify-start items-center font-bold'>Filter By:</div>
            <input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
                className=" border-b border-gray-300 focus:outline-none"
                placeholder="Min Price"
            />
            <input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className=" border-b border-gray-300 focus:outline-none"
                placeholder="Max Price"
            />
            <div className="flex flex-col flex-wrap gap-2">
                <div className='flex justify-start items-center font-bold'>Skills</div>
                {['html', 'css', 'php', 'javascript', 'react', 'wordpress', 'django', 'nodejs', 'graphicdesign', 'shopify', 'dataanalysis', 'unity'].map(tag => (
                    <label key={tag} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagChange(tag)}
                            className="mr-2"
                        />
                        {tag}
                    </label>
                ))}
            </div>
            <button onClick={handleFilterClick} className="bg-blue-500 text-white border-0 px-4 py-2 rounded-md">Apply Filters</button>
        </div>
    );
}

export default PriceTagFilter;
