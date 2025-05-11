import React from 'react';
import { Link } from 'react-router-dom';

const JuiceCard = ({ number, name, description, image, hoverColor, linkTo}) => {
    return (
        <div
            className="group bg-white h-full flex justify-center items-center transition-all duration-700"
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverColor;
                e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'inherit';

            }}
        >
            <div className='relative'>
                <div className=' relative flex justify-center items-center'>
                    <img src={image}
                        alt={name}
                        className="origin-center scale-0 opacity-0 hidden group-hover:block group-hover:opacity-100 group-hover:scale-100 duration-1000 inset-0 w-60 h-96 object-contain transition-all  ease-out">
                    </img>
                </div>
                <h3 className="text-md font-light hover:white">
                    {number}
                </h3>
                <h3 className="text-3xl font-lato mt-4">
                    {name}
                    <br />
                    Smoothie
                </h3>
                <p className="mt-2 mb-2">{description}</p>
                <Link  to={linkTo} className="w-fit font-lato font-light rounded-3xl flex mt-4 px-4 py-2 gap-4 border border-gray-400">
                <button className='flex gap-4'>
                    <div>View More</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default JuiceCard;

