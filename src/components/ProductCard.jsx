import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext";
// handle add to cart if not logged in
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }){
    const { addToCart, cartItems } = useCart();
    const productInCart = cartItems.find((item) => item.id === product.id);

    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";
    

    // handleAddToCart
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!user) {
            navigate("/auth");
            return;
        }

        addToCart(product.id);
    }

    return (<div className="product-card">
        <img src={product.image} alt={product.name} className="product-card-image" />
        <div className="product-card-content">
            <h3 className="product-card-name">{product.name}</h3>
            <p className="product-card-price">&#8358;{product.price}</p>
            <div className="product-card-actions">
                <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart {productQuantityLabel}</button>
            </div>
        </div>
    </div>);
}