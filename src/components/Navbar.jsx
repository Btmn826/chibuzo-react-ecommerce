import { NavLink, Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import { useCart } from "../context/CartContext";


export default function Navbar(){
    const { user, logout} = useAuth();
    const {cart} = useCart();

    const totalQuantity = cart?.reduce((total, item) => total + item.quantity, null);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-brand">
                    CPG-Shop
                </NavLink>
            
                <div className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
                        Home
                    </NavLink>
                    <div className="cart-icon">
                        <Link to="/checkout" className="navbar-link">
                            Cart🛒
                                {totalQuantity && <span className="cart-badge">
                                {totalQuantity}
                                </span>}
                            
                        </Link>
                    </div>
                </div>
                <div className="navbar-auth">
                    {
                        !user ?
                        <div className="navbar-auth-links">
                            <Link to="/auth" className="btn btn-secondary">
                                Login
                            </Link>
                            <Link to="/auth" className="btn btn-primary">
                                Signup
                            </Link>
                        </div> :
                        <div className="navbar-user">
                            <span className="navbar-greeting">Hello, {user.email}</span>
                            <button onClick={() => logout()} className="btn btn-secondary">Logout</button>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
} 