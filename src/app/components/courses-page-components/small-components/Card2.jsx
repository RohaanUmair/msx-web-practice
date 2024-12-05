import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Card2 = ({ title, desc, icon, link, img }) => {
    return (
        <div
            className="relative w-72 h-96 bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer duration-100"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>

            <div className="absolute text-3xl top-2 right-2 p-2 bg-white rounded-full">
                {icon || <FaInfoCircle />}
            </div>

            <div className="absolute bottom-12 left-4 text-white">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm">{desc}</p>
            </div>

            <a
                href={link}
                className="absolute bottom-4 right-2 bg-gradient-to-r from-purple-500 to-purple-400 text-white px-4 py-2 rounded-lg"
            >
                See Courses
            </a>
        </div>
    );
};

export default Card2;