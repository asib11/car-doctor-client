import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleSocialLogin = ()=>{
        googleSignIn()
        .then( () =>{
            // console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">
                or
            </div>
            <div className="pb-4 flex justify-center">
                <Link><button onClick={handleSocialLogin} className="btn btn-circle outline outline-[#FF3811] text-center">G</button></Link>
            </div>
        </div>
    );
};

export default SocialLogin;