import { NavLink } from "react-router-dom";


export default function Navbar(){

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-brand">
                    CPG-Shop
                </NavLink>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className="navbar-link">
                    Home
                </NavLink>
                <NavLink to="/checkout" className="navbar-link">
                    Cart
                </NavLink>
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <NavLink to="/auth" className="btn btn-secondary">
                        Login
                    </NavLink>
                    <NavLink to="/auth" className="btn btn-primary">
                        Signup
                    </NavLink>
                </div>
            </div>
        </nav>
    );
} 