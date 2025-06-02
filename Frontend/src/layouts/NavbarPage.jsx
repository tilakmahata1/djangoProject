import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cart from '../assets/images/cart-shopping.svg';
import search from '../assets/images/search-icon.svg';
import logo from '../assets/images/template-white-logo.png';

function NavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-dark sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">

          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto mr-4" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen) } className="text-white focus:outline-none ">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} sm:hidden flex-col lg:flex-row md:flex-grow justify-center`} >
            <ul className="flex justify-center space-x-4 text-white ">
              <li><NavLink to="/" className="hover:text-secondary font-semibold">Home</NavLink></li>
              <li><NavLink to="/category" className="hover:text-secondary font-semibold">Shop</NavLink></li>
              <li><NavLink to="/product" className="hover:text-secondary font-semibold">Product</NavLink></li>
              <li><NavLink to="/Errorpage" className="hover:text-secondary font-semibold">404 page</NavLink></li>
              <li><NavLink to="/checkout" className="hover:text-secondary font-semibold">Checkout</NavLink></li>
            </ul>
          </nav>

          {/* Right-side Actions */}
          <div className="hidden lg:flex items-center space-x-4 relative">
            <Link to="/register" className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Register</Link>
            <Link to="/login" className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Login</Link>

            {/* Cart Icon */}
            <div className="relative group cart-wrapper">
              <Link to="/cart">
                <img src={cart} alt="Cart" className="h-6 w-6 group-hover:scale-120" />
              </Link>
              {/* Cart dropdown */}
              <div className="absolute right-0 mt-1 w-80 bg-white shadow-lg p-4 rounded hidden group-hover:block z-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-line">
                    <div className="flex items-center">
                      <img src="/assets/images/single-product/1.jpg" alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                      <div>
                        <p className="font-semibold">Summer black dress</p>
                        <p className="text-sm">Quantity: 1</p>
                      </div>
                    </div>
                    <p className="font-semibold">$25.00</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/assets/images/single-product/2.jpg" alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                      <div>
                        <p className="font-semibold">Black suit</p>
                        <p className="text-sm">Quantity: 1</p>
                      </div>
                    </div>
                    <p className="font-semibold">$125.00</p>
                  </div>
                </div>
                <Link to="/cart" className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold">Go to Cart</Link>
              </div>
            </div>

            {/* Search Icon */}
            <button id="search-icon" className="text-white hover:text-secondary group">
              <img src={search} alt="Search" className="h-6 w-6 transition-transform transform group-hover:scale-120" />
            </button>

            <div id="search-field" className="hidden absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for products..." />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav id="mobile-menu-placeholder" className ={`mobile-menu ${menuOpen ? 'flex' : 'hidden'} flex-col items-center space-y-8 lg:hidden `}>
        <ul className="w-full">
          <li><NavLink to="/" className="hover:text-secondary font-bold block py-2">Home</NavLink></li>
          <li><NavLink to="/category" className="hover:text-secondary font-bold block py-2">Shop</NavLink></li>
          <li><NavLink to="/product" className="hover:text-secondary font-bold block py-2">Product</NavLink></li>
          <li><NavLink to="/404" className="hover:text-secondary font-bold block py-2">404 page</NavLink></li>
          <li><NavLink to="/checkout" className="hover:text-secondary font-bold block py-2">Checkout</NavLink></li>
        </ul>
        <div className="flex flex-col mt-6 space-y-2 items-center">
          <NavLink to="/register" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full inline-block min-w-[110px] text-center">Register</NavLink>
          <NavLink to="/login" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full inline-block min-w-[110px] text-center">Login</NavLink>
          <NavLink to="/cart" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full inline-block min-w-[110px] text-center">Cart - <span>5</span> items</NavLink>
        </div>

        <div className="top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for products..." />
        </div>
      </nav>
    </>
  );
}

export default NavbarPage;
