import { FormEvent, useState } from "react";


const SignUp = () => {
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log({firstName, lastName, email, password});
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={event => setFirstName(event.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={event => setLastName(event.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={event => setPassword(event.target.value)}/>
                </div>
                <div className="input-field">
                    <button className="btn pink z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

export { SignUp };