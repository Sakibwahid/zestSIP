import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartStatus, setCart] = useState("Add to cart");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCount = localStorage.getItem("cartCount");
        const savedItems = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCount) {
            setCartCount(Number(savedCount));
        }
        if (savedItems) {
            setCartItems(savedItems);
        }
    }, []);

    const handleCart = (item) => {
        setCart("Added to cart");
        toast.success(`${item.name} Smoothie added to cart`, { duration: 1000 });

        setCartCount((prevCount) => {
            const newCount = prevCount + 1;
            localStorage.setItem("cartCount", newCount);
            return newCount;
        });

        setCartItems((prevItems) => {
            const updatedCart = prevItems.map(i =>
                i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
            );
            const newCart = prevItems.some(i => i.name === item.name)
                ? updatedCart
                : [...prevItems, { ...item, quantity: 1 }];

            localStorage.setItem("cartItems", JSON.stringify(newCart));
            return newCart;
        });
        setTimeout(() => {
            setCart("Add to cart");
        }, 2000);
    };

    const removeCart = () => {
        setCartCount(0);
        localStorage.removeItem("cartCount");
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    const removeItem = (number) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.number !== number);
            const newCount = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            setCartCount(newCount);
            localStorage.setItem("cartCount", newCount);
            localStorage.setItem("cartItems", JSON.stringify(updatedItems));
            return updatedItems;
        });
        toast.error(`Item has been removed from cart`, { duration: 1000 });
    };

    const increaseQuantity = (number) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.number === number ? { ...item, quantity: item.quantity + 1 } : item
            );
            const newCount = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            setCartCount(newCount);
            localStorage.setItem("cartCount", newCount);
            localStorage.setItem("cartItems", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const decreaseQuantity = (number) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                {item.number === number && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item});
            const newCount = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            setCartCount(newCount);
            localStorage.setItem("cartCount", newCount);
            localStorage.setItem("cartItems", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    return (
        <CartContext.Provider value={{ cartCount, handleCart, cartStatus, removeCart, cartItems, removeItem, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};