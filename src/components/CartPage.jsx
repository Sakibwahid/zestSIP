import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Trash2 } from 'lucide-react';
import { div } from 'framer-motion/client';
import ThemeToggle from './ThemeToggle';

const CartPage = ({ isopen, close }) => {
  const { removeCart, cartCount, cartItems, removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);

  // Create a stable function reference for handling quantity decrease
  const handleDecreaseQuantity = (itemNumber, currentQuantity) => {
    if (currentQuantity === 1) {
      removeItem(itemNumber);
    } else {
      decreaseQuantity(itemNumber);
    }
  };

  if (!isopen) return null;

  return (
    <div className="bg-slate-100 font-Lato fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="w-full max-w-6xl h-full max-h-[95vh] bg-white border shadow-lg rounded-lg border-white/10 relative overflow-hidden flex flex-col">
        <button 
          className="btn btn-sm btn-circle absolute right-2 top-2 z-10" 
          onClick={close}
        >
          ✕
        </button>

        {cartCount === 0 ? (
          <div className='p-4 sm:p-8 h-full flex flex-col items-center justify-center gap-3'>
            <h2 className="text-gray-500 mt-4 text-center text-xl sm:text-2xl">Your cart is empty.</h2>
            <button>
              <a href="/" className="btn btn-md btn-primary">BUY YOUR SIP</a>
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 sm:py-8 sm:px-4 border-b">
              <h1 className="text-2xl sm:text-3xl font-lexend">Your cart</h1>
              <p className='mb-4 text-sm text-gray-500 font-Lato'>
                There's always space for another sip, another ride through flavours! 
                <a href='/' className='text-lg text-blue-700 cursor-pointer ml-1'>
                  Continue Shopping.
                </a>
              </p>
            </div>

            {/* Desktop Table Header - Hidden on mobile */}
            <div className='hidden md:grid grid-cols-12 text-center bg-gray-200 border-b'>
              <div className='col-span-2 p-3 font-semibold'>Image</div>
              <div className='col-span-4 p-3 font-semibold'>Name</div>
              <div className='col-span-2 p-3 font-semibold'>Quantity</div>
              <div className='col-span-2 p-3 font-semibold'>Unit Price</div>
              <div className='col-span-2 p-3 font-semibold'>Total</div>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div key={index}>
                  {/* Mobile Layout */}
                  <div className='md:hidden p-4 border-b bg-white'>
                    <div className='flex items-start gap-3'>
                      {/* Product Image */}
                      <div className=''>
                        <img src={item.image} alt={item.name} className="w-14 h-24 sm:w-20 sm:h-24 object-cover rounded"/>
                      </div>
                      
                      {/* Product Details */}
                      <div className='flex-1 min-w-0'>
                        <div className='flex justify-between items-start mb-2'>
                          <h3 className="text-base sm:text-lg font-medium truncate pr-2">{item.name} Smoothie</h3>
                          <button 
                            className="text-gray-400 hover:text-red-500 flex-shrink-0 p-1" 
                            onClick={() => removeItem(item.number)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        
                        {/* Price and Quantity Row */}
                        <div className='flex justify-between items-center'>
                          <div className='text-sm text-gray-600'>
                            ${item.price} each
                          </div>
                          <div className='text-lg font-semibold'>
                            ${(item.quantity * parseFloat(item.price)).toFixed(2)}
                          </div>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className='flex items-center justify-between mt-3'>
                          <div className='flex items-center gap-3'>
                            <button 
                              className='w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100'
                              onClick={() => decreaseQuantity(item.number)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </button>
                            
                            <span className="text-base font-medium min-w-[2rem] text-center">{item.quantity}</span>
                            
                            <button 
                              className='w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100'
                              onClick={() => increaseQuantity(item.number)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className='hidden md:grid grid-cols-12 border-b py-3 items-center'>
                    <div className='col-span-2 flex justify-center'>
                      <img src={item.image} alt={item.name} className="w-12 h-20 object-cover rounded" />
                    </div>
                    <div className='col-span-4 flex justify-between items-center px-4'>
                      <h2 className="text-lg">{item.name} Smoothie</h2>
                      <button 
                        className="text-gray-400 hover:text-red-500" 
                        onClick={() => removeItem(item.number)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className='col-span-2 flex justify-center items-center gap-2'>
                      <button 
                        className='w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100'
                        onClick={() => handleDecreaseQuantity(item.number, item.quantity)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <p className="text-sm min-w-[2rem] text-center">{item.quantity}</p>
                      <button 
                        className='w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100'
                        onClick={() => increaseQuantity(item.number)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                    <div className='col-span-2 flex justify-center'>
                      <p className="text-sm">${item.price}</p>
                    </div>
                    <div className='col-span-2 flex justify-center'>
                      <p className="text-sm">${(item.quantity * parseFloat(item.price)).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with Total and Actions */}
            <div className="border-t bg-white p-4">
              {/* Total */}
              <div className="flex justify-between items-center text-xl font-bold mb-4">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-center sm:items-center">
                <button className="btn btn-md btn-primary flex-1 sm:flex-none">Checkout</button>
                <button className="btn btn-outline btn-error flex-1 sm:flex-none" onClick={removeCart}>
                  Remove All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

