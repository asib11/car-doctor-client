
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const serviceBook = useLoaderData();
    const {user} = useContext(AuthContext);
    const { title, price, _id } = serviceBook;
    const handleCheckOut = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const phone = form.phone.value;
        const booking = {
            customerName: name,
            date,
            email,
            price: price,
            service_id: _id,
            service: title,
            phone

        }
        

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }



    return (
        <div>
            <h1 className="text-7xl font-bold">Service book{title}</h1>

            <form onSubmit={handleCheckOut} className="card-body border-2 p-20 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">

                        <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="email" placeholder="Your Email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">

                    <input type="text" defaultValue={`$${price}`} placeholder="due ammount" name="message" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block bg-[#FF3811] text-white" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;