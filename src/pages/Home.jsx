import { getProducts } from "../data/products";

export default function Home(){

    const products = getProducts();

    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to CPG-Shop</h1>
                <p className="home-subtitle">
                    Discover amazing products at great prices
                </p>
            </div>
            <div className="container">
                <h2 className="page-title">Browse through Our Products</h2>
            </div>
        </div>
    );
}