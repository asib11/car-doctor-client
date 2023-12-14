

// eslint-disable-next-line react/prop-types
const BookingRow = ({ booking }) => {
    // eslint-disable-next-line react/prop-types
    const { customerName, email, date, price, img, service } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                    <div className="avatar">
                        {
                            img && <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        }
                    </div>
                   
               
            </td>
            <td className="font-bold">{customerName}</td>
            <td>
                {email}
            </td>
            <td>{date}</td>
            <td>{service}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;