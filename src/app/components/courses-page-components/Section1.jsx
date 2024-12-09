"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";


function Section1() {
    const texts = ["Engineering", "Project Management", "Health and Safety", "Leadership", "IT", "AI"];
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
        <div className="max-sm:px-8 pt-[100px] relative max-sm:h-full max-sm:gap-2 w-full bg-cover px-24 sm:h-screen flex justify-center pb-14 flex-col gap-3"
        // style={{backgroundImage: 'url("/bg-courses.jpg")'}}
        >

            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg-courses.jpg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <h1
                className="text-6xl h-32 max-sm:mt-9 max-sm:text-4xl font-semibold text-purple-500 overflow-hidden"
                key={animationKey}
            >
                <span className="animate-textChange h-full">{texts[index]} <br /> Courses</span>
            </h1>

            <h2 className="text-3xl font-semibold text-white sm:w-[60%] max-sm:text-lg">Computer And Management Education Institute</h2>

            <p className="sm:w-[60%] text-white max-sm:text-xs">MSX is the top computer and digital marketing institute in Karachi, offering diverse computer, digital marketing, IT and medical courses with guaranteed internship and potential job offer.

            </p>
        </div>
    )
}

export default Section1;