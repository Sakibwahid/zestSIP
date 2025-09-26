import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from './CartContext';

function Navbar() {
  const { cartCount } = useContext(CartContext)
  const location = useLocation();
  return (
    <nav
      className={`
        ${location.pathname === '/' ? 'text-black' : 'text-white'}
        md:fixed w-full z-50 top-0 left-0
        bg-white/30 backdrop-blur-md
      `}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,255,255,0.3)',
      }}
    >
      <div className='w-full px-4 py-4 flex items-center justify-between'>
        <div>
          <Link to="/"><div className='font-bold font-lexend text-2xl'>zestSIP</div></Link>
        </div>
        <div>
          <ul className='flex gap-6'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className='flex justify-center items-center'>
              <Link to="/cart">
                <button className="relative flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                </button>
              </Link>
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
