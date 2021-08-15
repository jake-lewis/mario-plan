import { NavLink } from "react-router-dom";


export default function SignedInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink className="btn btn-floating pink lighten-1" to="/">JL</NavLink></li>
        </ul>
    )
}