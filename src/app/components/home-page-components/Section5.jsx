"use client";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Heading from "./Heading";

function Section5() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/hoverImgsData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const row1 = data.slice(0, 4);
    const row2 = data.slice(4);

    const [bg, setBg] = useState('https://images.unsplash.com/photo-1732692695680-f4c37b5bbbea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D')

    const [focused, setFocused] = useState('Health Tech');


    return (
        <div className="sm:px-24 sm:mt-14 py-16 max-sm:mt-10">

            <div className="w-2/3 flex flex-col gap-4 max-sm:w-full max-sm:my-5">
                <Heading text={"Industries We Transformed with Innovative Software Solutions"} />
                <p className="text-gray-500 max-sm:text-sm">We are committed to innovating across industries with our custom AI solutions, empowering businesses to thrive in the digital era.</p>
            </div>

            <div className="h-[600px] max-sm:h-full bg-no-repeat bg-cover text-white mt-6" style={{ backgroundImage: `url(${bg})`, filter: 'grayscale(70%)' }}>

                <div className="h-1/2 flex max-sm:flex-col">
                    {
                        row1.map((item) => {
                            if (item.heading == focused) {
                                return (
                                    <div key={item.heading} onMouseEnter={() => setBg(item.imgSrc)} className="gap-3 max-sm:w-full opacity-90 bg-gradient-to-r from-purple-500 to-purple-400 w-1/4 flex flex-col px-10 py-12 border border-white">
                                        <h1 className="text-3xl">{item.heading}</h1>
                                        <p className="text-sm">{item.desc}</p>
                                        <button className="flex items-center">Read More <IoIosArrowRoundForward className="text-2xl" /></button>
                                    </div>
                                )
                            }

                            return (
                                <div key={item.heading} onMouseEnter={() => {
                                    setBg(item.imgSrc)
                                    setFocused(item.heading)
                                }} className="w-1/4 flex flex-col px-10 py-12 border max-sm:w-full border-white">
                                    <h1 className="text-3xl m-auto">{item.heading}</h1>
                                </div>
                            )
                        })
                    }
                </div>


                <div className="h-1/2 flex max-sm:flex-col">
                    {
                        row2.map((item) => {
                            if (item.heading == focused) {
                                return (
                                    <div key={item.heading} onMouseEnter={() => setBg(item.imgSrc)} className="max-sm:w-full gap-3 bg-gradient-to-r from-purple-500 to-purple-400 w-1/4 flex flex-col px-10 py-12 border border-white">
                                        <h1 className="text-3xl">{item.heading}</h1>
                                        <p className="text-sm">{item.desc}</p>
                                        <button className="flex items-center">Read More <IoIosArrowRoundForward className="text-2xl" /></button>
                                    </div>
                                )
                            }

                            return (
                                <div key={item.heading} onMouseEnter={() => {
                                    setBg(item.imgSrc)
                                    setFocused(item.heading)
                                }} className="w-1/4 flex flex-col px-10 py-12 border max-sm:w-full border-white">
                                    <h1 className="text-3xl m-auto">{item.heading}</h1>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Section5;