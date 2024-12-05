"use client";

import { useEffect, useState } from "react";


function Section1() {
    const texts = ["IT Courses", "Management Course", "Leadership Courses", "Techinal Courses"];
    const [index, setIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setAnimationKey((prevKey) => prevKey + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="pt-[100px] w-full bg-cover px-24 h-screen flex justify-center pb-14 flex-col gap-3"
        style={{backgroundImage: 'url("/bg-courses.jpg")'}}
        >
            <h1
                className="text-6xl h-20 font-semibold text-purple-500 overflow-hidden"
                key={animationKey}
            >
                <span className="animate-textChange h-full">{texts[index]}</span>
            </h1>

            <h2 className="text-3xl font-semibold text-white sm:w-[60%]">Computer And Management Education Institute</h2>

            <p className="sm:w-[60%] text-white">MSX is the top computer and digital marketing institute in Karachi, offering diverse computer, digital marketing, IT and medical courses with guaranteed internship and potential job offer.

            </p>
        </div>
    )
}

export default Section1;