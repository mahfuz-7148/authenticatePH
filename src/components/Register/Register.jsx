// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {
    const { createUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // create user
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Register now!</h3>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Already Have an account? Please <Link className='text-blue-400 underline' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;