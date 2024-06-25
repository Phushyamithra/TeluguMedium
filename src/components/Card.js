import '../styles/Card.css';

const Card = ({ product }) => {
    console.log(product)
    return (
        <div className="card">
            <div className="wrapper">
                <div className="container">
                    <div className="top">
                        <img src={product.pic} alt={product.theme} /> {/* Use pic and theme properties */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
