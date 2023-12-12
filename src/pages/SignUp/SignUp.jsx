import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        console.log(event.target.email.value)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .then(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="">
                    <img src={img} alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-6">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Full Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn  bg-[#FF3811] text-white' type="submit" value="Sign Up" />
                        </div>
                        <p>Have an account? <Link className='text-[#FF3811]' to='/login'>Login</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;