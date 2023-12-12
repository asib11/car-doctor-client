import img from '../../assets/images/login/login.svg'
const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.vaule;
        const password = form.password.value;
        const user = {email, password};
        console.log(user)
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
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;