"use client";
import { useEffect, useState } from "react";



function SwicthText() {
    const [data, setData] = useState([]);
    const [selectedBtn, setSelectedBtn] = useState('AI-Powered HIMS');

    useEffect(() => {
        fetch("/solutionsData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return (
        <>
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
        </>
    )
}

export default SwicthText;