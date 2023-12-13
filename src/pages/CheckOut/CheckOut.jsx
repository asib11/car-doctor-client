
import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const serviceBook = useLoaderData();
    const { title, price, service_id, _id } = serviceBook;
    return (
        <div>
            <h1 className="text-7xl font-bold">Service book{title}</h1>

            <form className="card-body border-2 p-20 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">

                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">

                    <input type="text" placeholder="Message" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block bg-[#FF3811] text-white" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;