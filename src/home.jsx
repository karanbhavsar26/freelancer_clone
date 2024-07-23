import { useSelector, useDispatch } from 'react-redux';
import PriceTagFilter from './filterBy';
import ProjectList from './projectList';
import SearchBar from './SearchBar';
import { setFilteredProjects } from './store/MainSlice';
export default function Home() {
    const projectData = useSelector((state) => state.projectData);

console.log("projectData",projectData)
    return (
        <div className='w-full flex flex-col gap-8 items-center justify-center '>
        <SearchBar projects={projectData} setFilteredProjects={setFilteredProjects}/>
        <div className='w-full md:flex gap-4 p-2'>
        <div className='md:block hidden'>
        <PriceTagFilter projects={projectData} setFilteredProjects={setFilteredProjects}/>
        </div>
        <ProjectList projects={projectData} setFilteredProjects={setFilteredProjects}/>
        </div>
        </div>
    )
}