"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function BoxList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/stepsApproachData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex gap-6 mt-16 max-sm:mt-8 max-sm:flex-wrap max-sm:gap-0 max-sm:gap-y-2">
            {
                data.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            imgSrc={item.imgSrc}
                            stepNumber={index + 1}
                            heading={item.heading}
                            text={item.text}
                        />
                    )
                })
            }
        </div>
    );
}

export default BoxList;



function Box({ imgSrc, stepNumber, heading, text }) {
    return (
        <div className="w-1/5 max-sm:w-1/2 flex flex-col gap-4 max-sm:h-full max-sm:px-2 max-sm:py-1 max-sm:mb-4 max-sm:items-center">
            <Image src={imgSrc} alt="step-number" width={70} height={70} />

            <h3 className="text-gray-500 font-semibold max-sm:text-sm">Step {stepNumber}</h3>

            <h4 className="text-base font-semibold h-12 max-sm:text-sm max-sm:text-center">{heading}</h4>

            <p className="text-gray-500 text-sm leading-[22px] max-sm:hidden">{text}</p>
        </div>
    )
}