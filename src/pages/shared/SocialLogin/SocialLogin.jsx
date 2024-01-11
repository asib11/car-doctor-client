import { Link } from "react-router-dom";


const SocialLogin = () => {
    return (
        <div>
            <div className="divider">
                or
            </div>
            <div className="pb-4 flex justify-center">
                <Link><button className="btn btn-circle outline outline-[#FF3811] text-center">G</button></Link>
            </div>
        </div>
    );
};

export default SocialLogin;