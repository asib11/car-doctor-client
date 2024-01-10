import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            const loggedUser = {
                email: user.email
            }
            console.log(user);
            // navigate(from, {replace:true});
            fetch('http://localhost:5000/jwt', {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //dont use local storage
                localStorage.setItem('car-access-token', data.token);
                navigate(from, {replace:true});
            })
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
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn  bg-[#FF3811] text-white' type="submit" value="Login" />
                        </div>
                        <p>Have not an account? <Link className='text-[#FF3811]' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;