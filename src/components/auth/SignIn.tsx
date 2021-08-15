import { FormEvent, useState } from "react";


const SignIn = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log({email, password});
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
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

export { SignIn };