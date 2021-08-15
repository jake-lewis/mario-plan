import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ id?: string }> {

}

const ProjectDetails = ({match}: Props) => {
    
    const id = match.params.id;
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jake Lewis</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export { ProjectDetails };