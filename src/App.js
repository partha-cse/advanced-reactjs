import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeSelector, NavBar } from './components';
import { Products, Orders, ProductsBad } from './pages';
import { ThemeProvider } from './contexts';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/products_bad" element={<ProductsBad />} />
                </Routes>
            </Router>
            <ThemeSelector />
        </ThemeProvider>
    );
}

export default App;
