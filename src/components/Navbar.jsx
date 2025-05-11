import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from './CartContext';

function Navbar() {
  const {cartCount} = useContext(CartContext)
  return (
    <nav className={`${useLocation().pathname === '/' ? 'text-black' : 'text-white'} fixed w-full z-50 top-0 left-0`}>
      <div className='mx-8 py-4 flex items-center bg-transparent justify-between' >
        <Link to="/"><div className='font-bold font-lexend text-2xl'>zestSIP</div></Link>
        <div>
          <ul className='flex gap-6'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className='flex justify-center items-center' >
              <Link to="/cart" > <button className="relative flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                   {cartCount}
                </span>
              </button></Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
