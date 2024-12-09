"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function SwitchBgImgsSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/hoverImgsData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const row1 = data.slice(0, 3);
    const row2 = data.slice(3);

    const [bg, setBg] = useState('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D')

    const [focused, setFocused] = useState('Health Tech');


    return (
        <div className="h-[600px] max-sm:h-full bg-no-repeat bg-cover text-white mt-6" style={{ backgroundImage: `url(${bg})`, filter: 'grayscale(70%)' }}>

            <div className="h-1/2 flex max-sm:flex-col">
                {
                    row1.map((item) => {
                        if (item.heading == focused) {
                            return (
                                <div key={item.heading} onMouseEnter={() => setBg(item.imgSrc)} className="gap-3 max-sm:w-full opacity-90 bg-gradient-to-r from-purple-500 to-purple-400 w-1/3 flex flex-col px-10 py-12 border border-white">
                                    <h1 className="text-3xl">{item.heading}</h1>
                                    {/* <p className="text-sm">{item.desc}</p> */}
                                    <button className="flex items-center"><Link className="flex items-center" href={`courses${item.link}`}>View <IoIosArrowRoundForward className="text-2xl" /></Link></button>
                                </div>
                            )
                        }

                        return (
                            <div key={item.heading} onMouseEnter={() => {
                                setBg(item.imgSrc)
                                setFocused(item.heading)
                            }} className="w-1/3 flex flex-col px-10 py-12 border max-sm:w-full border-white">
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
                                <div key={item.heading} onMouseEnter={() => setBg(item.imgSrc)} className="max-sm:w-full gap-3 bg-gradient-to-r from-purple-500 to-purple-400 w-1/3 flex flex-col px-10 py-12 border border-white">
                                    <h1 className="text-3xl">{item.heading}</h1>
                                    {/* <p className="text-sm">{item.desc}</p> */}
                                    <button className="flex items-center"><Link className="flex items-center" href={`courses${item.link}`}>View <IoIosArrowRoundForward className="text-2xl" /></Link></button>
                                </div>
                            )
                        }

                        return (
                            <div key={item.heading} onMouseEnter={() => {
                                setBg(item.imgSrc)
                                setFocused(item.heading)
                            }} className="w-1/3 flex flex-col px-10 py-12 border max-sm:w-full border-white">
                                <h1 className="text-3xl m-auto">{item.heading}</h1>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SwitchBgImgsSection;