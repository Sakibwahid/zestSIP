import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";

const PageCard = ({ number, name, price, image, description, flavour, bgColor }) => {
    const [selectedSize, setSelectedSize] = useState("250ml");
    const [currentPrice, setCurrentPrice] = useState(price);
    const { cartCount, handleCart, cartStatus } = useContext(CartContext);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setCurrentPrice(size === "250ml" ? "$5.99" : "$8.99");
    };
    const additems = () => {
        handleCart({ number, name, price: currentPrice, size: selectedSize, image });
    };

    return (
        <div className={`h-screen p-6 ${bgColor} font-lato`}>
            <Navbar />
            <h1
                className="absolute text-[180px] -translate-x-1/2 -translate-y-1/2 font-bold text-white opacity-80 top-1/3 left-1/2 pointer-events-none"
            >
                {name.toUpperCase()}
            </h1>
            <div className="mx-6 h-full grid grid-cols-3">
                <div className="flex font-light justify-start items-end col-span-1">
                    <div>
                        <h3 className="text-white text-4xl font-lato mt-4">
                            {name}
                            <br />
                            Smoothie
                        </h3>
                        <p className="text-white mt-2 mb-2">
                            {flavour} - <span className="text-2xl font-semibold">{currentPrice}</span>
                        </p>
                        <p className="text-sm text-gray-100 mt-2 mb-2">{description}</p>
                        <div className="flex items-center  gap-4">
                            <button onClick={additems} className={`${cartStatus === "Added to cart" ? "bg-gray-400 text-white" : "bg-white text-black"
                                } w-fit font-lato font-light rounded-3xl flex mt-4 px-4 py-2 gap-4`}>{cartStatus}
                            </button>
                            {cartCount > 0 && (
                                <p className="text-gray-300 mt-4 px-4 py-2">
                                    {cartCount} {cartCount === 1 ? "item has" : "items have"} been added.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-span-1">
                    <div className="flex justify-center items-start">
                        <img
                            src={image}
                            alt={name}
                            className="z-10 hover:rotate-12 transition-all duration-500 object-cover w-3/4 h-3/4"
                        />
                    </div>
                </div>
                <div className="flex flex-col text-xs gap-3 justify-center items-end col-span-1">
                    <button
                        className={`${selectedSize === "250ml" ? "bg-black text-white" : "bg-white text-black"
                            } rounded-full w-fit p-6`}
                        onClick={() => handleSizeChange("250ml")}
                    >
                        250
                    </button>
                    <button
                        className={`${selectedSize === "500ml" ? "bg-black text-white" : "bg-white text-black"
                            } rounded-[100%] w-fit p-6`}
                        onClick={() => handleSizeChange("500ml")}
                    >
                        500
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageCard;
