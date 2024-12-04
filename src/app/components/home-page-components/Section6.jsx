"use client";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";

function Section6() {
    const [data, setData] = useState([]);
    const [selectedBtn, setSelectedBtn] = useState('AI-Powered HIMS');

    useEffect(() => {
        fetch("/solutionsData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);



    return (
        <div className="sm:px-24 sm:pb-24 flex flex-col gap-6 max-sm:gap-1">
            <Heading text={'Our Client-Centric AI Solutions'} />

            <div className="flex h-full max-sm:flex-col">

                <div className="flex flex-col w-1/2 gap-6 items-start max-sm:w-full max-sm:px-6"> 

                    <div className="flex gap-3 mt-4 max-sm:flex-col max-sm:w-full">
                        {
                            data.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={`border px-3 py-2 rounded outline-none max-sm:w-full ${item.title == selectedBtn ? "bg-gradient-to-r from-purple-500 to-purple-400 text-white" : ""}`}
                                        style={{ transform: 'skew(-20deg)' }}
                                        onClick={() => setSelectedBtn(item.title)}>

                                        <span style={{ transform: 'skew(20deg)', display: 'inline-block' }}>
                                            {item.title}
                                        </span>

                                    </button>
                                )
                            })
                        }
                    </div>

                    {
                        data.map((item) => {
                            if (item.title == selectedBtn) {
                                return (
                                    <div key={item.heading}>
                                        <h1 className="text-3xl max-sm:text-2xl">{item.heading}</h1>
    
                                        <p className="text-gray-500 text-base mt-6 max-sm:text-sm">{item.p1}</p>
                                        <p className="text-gray-500 text-base mt-6 max-sm:text-sm">{item.p2}</p>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }


                    <button className="bg-gradient-to-r from-purple-500 to-purple-400 rounded px-4 py-2 text-white hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500">Read More</button>
                </div>


                <div className="w-1/2 max-sm:w-full flex items-center justify-center">
                    <Image src='/hims-img.webp' alt="hims-img" height={700} width={700} />
                </div>

            </div>
        </div>
    )
}

export default Section6;