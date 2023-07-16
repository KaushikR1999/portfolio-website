import ProjectCard from './ProjectCard';
import projectData from './projectData';
import '../../App.css';

export default function Projects() {

    const projectComponents = projectData.map(
        project => {
            return (
                <ProjectCard key={project.id} project={project} />
            )
        }
    )

    return (
        <div className="p-20">
            <h1 className="text-center text-4xl font-bold">Projects</h1>
            <div className="p-40">
                <ul className="flex flex-row grid grid-cols-3 pt-5">
                    {projectComponents.map((item, index) => (
                        <li className="p-2" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}