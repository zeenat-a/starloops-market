import React from 'react';
import './Shop.css';

const products = [
    {
        id: 1,
        name: 'Starfish Tote Bag',
        price: '$30.00',
        image: 'starfishbag.webp'
    },
    {
        id: 2,
        name: 'Tomato Tote Bag',
        price: '$20.00',
        image: 'tomatobag.webp'
    },
    {
        id: 3,
        name: 'Wrist Warmers',
        price: '$15.00',
        image: 'wristwarmers.webp'
    },
    {
        id: 4,
        name: 'Blueberry Bucket Hat',
        price: '$25.00',
        image: 'blueberry.webp'
    },
    {
        id: 5,
        name: 'Ruffled Bag',
        price: '$40.00',
        image: 'rufflebag.webp'
    },
    {
        id: 6,
        name: 'Pudding Plush',
        price: '$10.00',
        image: 'pudding.webp'
    },
    {
        id: 7,
        name: 'Coaster Set',
        price: '$10.00',
        image: 'coasters.webp'
    }
];

const Shop = () => {
    return (
        <div className="shop-container">
            <aside className="shop-sidebar">
                <h2>Browse by Category</h2>
                <ul>
                    <li>All Items</li>
                    <li>Hats</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                </ul>
                <h2>Price Range</h2>
                <ul>
                    <li>$15 - $30</li>
                    <li>$30 - $50</li>
                </ul>
                <h2>Availability</h2>
                <ul>
                    <li>In Stock</li>
                </ul>
            </aside>
            <main className="shop-main">
                <div className="shop-header">
                    <h2>7 results</h2>
                    <div className="shop-sort">
                        <label htmlFor="sort">Sort by</label>
                        <select id="sort" name="sort">
                            <option value="relevance">Relevance</option>
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Shop;