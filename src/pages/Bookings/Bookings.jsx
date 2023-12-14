import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDelete = id =>{
        const processed = confirm('are you sure want to delete?');
        if (processed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount> 0){
                    alert('deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>date</th>
                        <th>service</th>
                        <th>price</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                   {
                    bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
                   }
                </tbody>

            </table>
        </div>
    );
};

export default Bookings;