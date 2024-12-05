"use client";
import { useEffect, useState } from "react";
import Heading from "./small-components/Heading";
import { FaSquareFull } from "react-icons/fa";


function Section3() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/servicesData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    const [selectedService, setSelectedService] = useState('AI Development');

    if (!data) return <h1>loading</h1>

    return (
        <div className="w-full bg-white sm:px-24 sm:mb-24">
            <Heading text={'Services We Offer'} />

            <div className="w-full mt-5 flex max-sm:flex-col">
                <div className="bg-blue-950 w-1/3 h-full flex flex-col pt-10 shadow z-10 max-sm:w-full">
                    {
                        data?.map((item, index) => {
                            return (
                                <h1 onClick={() => setSelectedService(item.heading)} key={index} className={`text-white text-lg font-bold h-12 ml-6 pl-6 w-96 max-sm:w-full max-sm:ml-1 flex items-center cursor-pointer hover:underline ${selectedService == item.heading ? "bg-gradient-to-r from-purple-500 to-purple-400" : ""}`}>{item.heading}</h1>
                            )
                        })
                    }
                </div>

                <div className="px-12 border mt-14 h-full py-12 flex flex-col gap-5 max-sm:py-6 max-sm:mt-0 max-sm:px-7" style={{ boxShadow: '1px 1px 10px 3px #ccc' }}>
                    {
                        data.map((item, index) => {
                            if (item.heading == selectedService) {
                                return (
                                    <div key={index}>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-bold text-2xl max-sm:text-xl">{item.heading}</h2>
                                            <p className="text-gray-500 text-lg max-sm:text-base">{item.desc}</p>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-500 my-3">Business Benefits of Choosing Us</h3>

                                            <ul className="flex flex-col gap-3">
                                                {
                                                    item.benefits.map((elem, index) => {
                                                        return (
                                                            <li key={index} className="text-gray-500 text-lg max-sm:text-sm"><span className="text-lg font-bold text-gray-500 flex items-center gap-2 max-sm:text-base"><FaSquareFull className="text-sm text-black" /> {elem.benefit}: </span>{elem.detail}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Section3;