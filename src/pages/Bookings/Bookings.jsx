import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const url = `https://car-doctor-server-blush-six.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers:{
                authorization: `bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error){
                    setBookings(data);
                }else{
                    navigate('/');
                    //but acurate work is use logout method
                }
            })
    }, []);

    const handleDelete = id => {
        const processed = confirm('are you sure want to delete?');
        if (processed) {
            fetch(`https://car-doctor-server-blush-six.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleConfirm = id => {
        const processed = confirm('are you sure want to delete?');
        if (processed) {
            fetch(`https://car-doctor-server-blush-six.vercel.app/bookings/${id}`, {
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = 'confirm';
                        const newUpdate = [updated, ...remaining];
                        setBookings(newUpdate);
                        alert('confirmed successfully');
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
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Bookings;