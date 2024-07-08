import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Cart from './components/Cart';
import Shop from './components/Shop'; 
import './App.css'; 

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<React.Fragment>
                            <Hero />
                            <FeaturedProducts />
                            <About />
                    </React.Fragment>} />
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/shop" element={<Shop />} /> {/* Define the route for Shop component */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;