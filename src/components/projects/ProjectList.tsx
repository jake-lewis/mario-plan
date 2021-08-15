import { useSelector } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { selectAllProjects } from "./projectsSlice";
import { ProjectSummary } from "./ProjectSummary"

const ProjectList = () => {
    const projects = useAppSelector(state => selectAllProjects(state));

    return (
        <div className="project-list section">
            {projects && projects.map(project => <ProjectSummary project={project}/>)}
        </div>
    )
}

export { ProjectList };