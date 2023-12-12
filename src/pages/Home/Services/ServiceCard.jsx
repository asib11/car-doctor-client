

// eslint-disable-next-line react/prop-types
const ServiceCard = ({service}) => {
    // eslint-disable-next-line react/prop-types
    const {title, img, price} = service;
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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;