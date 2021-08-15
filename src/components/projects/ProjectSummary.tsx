import { Project } from "./projectsSlice";

export interface Props {
    project: Project
}

const ProjectSummary = ({project}: Props) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p className="grey-text">{new Date(project.dateCreated).toDateString()}</p>
            </div>
        </div>
    )
}

export { ProjectSummary };