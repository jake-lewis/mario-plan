import { FormEvent, useState } from "react";

const ProjectCreate = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log({title, content});
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={event => setTitle(event.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={event => setContent(event.target.value)}/>
                </div>
                <div className="input-field">
                    <button className="btn pink z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export { ProjectCreate };