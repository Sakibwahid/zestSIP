import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Trash2 } from 'lucide-react';
import { div } from 'framer-motion/client';
import ThemeToggle from './ThemeToggle';

const CartPage = ({ isopen, close }) => {
  const { removeCart, cartCount, cartItems, removeItem ,increaseQuantity,decreaseQuantity } = useContext(CartContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);
  if (!isopen)
    return null;
  return (

    <div className="bg-slate-100 font-Lato fixed inset-0 flex items-center justify-center z-50">
      <div className=" min-w-[80%] bg-white border shadow-lg rounded-lg border-white/10  relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={close}
        >
          ✕
        </button>
        {cartCount === 0 ? (
          <div className='p-8 h-full flex flex-col items-center justify-center gap-3'>
            <h2 className="text-gray-500 mt-4 text-center text-2xl">Your cart is empty.
            </h2>
            <button>
              <a href="/" className="btn btn-md btn-primary">BUY YOUR SIP</a>
            </button>
          </div>
        )
          :
          (
            <div className="py-8 px-4">
              <h1 className="text-3xl font-lexend font">Your cart</h1>
              <p className='mb-4 text-sm text-gray-500 font-Lato'>Theres always space for another sip,another ride through flavours!
                <a href='/' className='text-lg text-blue-700 cursor-pointer' > Continue Shopping.</a>
              </p>
              <div className='text-center grid grid-cols-12'>
                <div className='col-span-2 p-2 border border-1 border-white bg-gray-200'>Image</div>
                <div className='col-span-4 p-2 border-1 border border-white bg-gray-200'>Name</div>
                <div className='col-span-2 p-2 border-1 border border-white bg-gray-200'>Quantity</div>
                <div className='col-span-2 p-2 border-1 border border-white bg-gray-200'>Unit price</div>
                <div className='col-span-2 p-2 border-1 border border-white bg-gray-200'>Total</div>

              </div>
              {cartItems.map((item, index) => (
                <div key={index} className='grid grid-cols-12 border-b'>
                  <div className='col-span-2 flex justify-center items-center'><img src={item.image} alt={item.name} className="w-12 h-20" /></div>
                  <div className='col-span-4 flex justify-start items-center '>
                    <div className='w-full flex justify-between items-center'>
                      <h2 className="text-lg ">{item.name} Smoothie</h2>
                      <button className="mr-4" onClick={() => removeItem(item.number)}><Trash2 size={20} className='hover:text-red-500' /></button>
                    </div>
                  </div>
                  <div className='col-span-2 flex justify-around items-center gap-2 px-4'>
                    {/* Minus Button */}
                    <button onClick={item.quantity === 1 ? () => removeItem(item.number) : () => decreaseQuantity(item.number)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    <p className="text-sm">{item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.number)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>

                  <div className='col-span-2 flex justify-center items-center'> <p className="text-sm">${item.price}</p></div>
                  <div className='col-span-2 flex justify-center items-center'><p className="text-sm">${(item.quantity * parseFloat(item.price)).toFixed(2)}</p></div>

                </div>
              ))}

              <div className="grid grid-cols-12 text-center font-semibold text-lg mt-4">
                <div className="col-span-8 text-right pr-4"></div>
                <div className="col-span-2 text-center">Total:</div>
                <div className="col-span-2">${totalPrice.toFixed(2)}</div>
              </div>

              <div className=" text-white mt-8 flex justify-center items-center gap-3">
                <button className="btn btn-md btn-primary">Checkout</button>
                <button className="btn btn-outline btn-error" onClick={removeCart}>Remove All</button>
              </div>
            </div>

          )}
      </div>

    </div>

  );

};

export default CartPage;

