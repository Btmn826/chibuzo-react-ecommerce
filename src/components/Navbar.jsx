import { NavLink, Link } from "react-router-dom";


export default function Navbar(){

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
                    <Link to="/checkout" className="navbar-link">
                        Cart
                    </Link>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/auth" className="btn btn-secondary">
                            Login
                        </Link>
                        <Link to="/auth" className="btn btn-primary">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 