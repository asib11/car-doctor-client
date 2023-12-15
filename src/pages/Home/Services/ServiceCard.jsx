import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const {_id, title, img, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-5">
                    <img src={img} alt="Shoes" className="rounded-lg" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn bg-[#FF3811] text-white">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;