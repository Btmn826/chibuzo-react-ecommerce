import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext";


export default function Navbar(){
    const { user, logout} = useAuth();

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