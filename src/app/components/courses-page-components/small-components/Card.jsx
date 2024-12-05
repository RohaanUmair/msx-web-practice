import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Card = ({ title, desc, icon, link, img, additionalDesc, cardPosRight }) => {
    {
        return cardPosRight ? (
            <div className="relative flex max-w-full  border border-purple-500 rounded-lg">
                <div className="flex flex-col justify-start items-start p-6 w-3/4 bg-gray-100 rounded-r-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm mt-2">{desc}</p>
                    <p className="text-sm mt-2">{additionalDesc}</p>
                    <Link href={link}>
                        <button className='border mt-2 border-purple-500 bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-3 rounded text-base hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500'>See Courses</button>
                    </Link>
                </div>

                <Image
                    alt='img'
                    src={img}
                    width={1600}
                    height={900}
                    className="relative object-cover w-3/4 h-72 bg-cover bg-center rounded-lg shadow-lg  transition-all cursor-pointer duration-300"
                />

                <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
                    {icon || <FaInfoCircle />}
                </div>
            </div >
        ) : (
            <div className="relative flex max-w-full  border border-purple-500 rounded-lg">
                <Image
                    alt='img'
                    src={img}
                    width={1600}
                    height={900}
                    className="relative object-cover w-3/4 h-72 bg-cover bg-center rounded-lg shadow-lg  transition-all cursor-pointer duration-300"
                />

                <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
                    {icon || <FaInfoCircle />}
                </div>

                <div className="flex flex-col justify-start items-start p-6 w-3/4 bg-gray-100 rounded-r-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm mt-2">{desc}</p>
                    <p className="text-sm mt-2">{additionalDesc}</p>
                    <Link href={link}>
                        <button className='border mt-2 border-purple-500 bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-3 rounded text-base hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500'>See Course</button>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Card;