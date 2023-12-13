
import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const serviceBook = useLoaderData();
    const { title, price, service_id, _id } = serviceBook;
    const handleCheckOut = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(firstName, lastName, phone, email, message);
    }



    return (
        <div>
            <h1 className="text-7xl font-bold">Service book{title}</h1>

            <form onSubmit={handleCheckOut} className="card-body border-2 p-20 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">

                        <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">

                    <input type="text" placeholder="Message" name="message" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block bg-[#FF3811] text-white" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;