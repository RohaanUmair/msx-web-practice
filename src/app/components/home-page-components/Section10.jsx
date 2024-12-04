"use client";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import Questions from "./Questions";

function Section10() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/faqData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) return;
    console.log(data)

    return (
        <div className="sm:mt-14 sm:px-24 mb-14">
            <Heading text={'Frequently Asked Questions'} />

            <div className="flex flex-col gap-4 mt-8 max-sm:px-4 max-sm:gap-2">
                {
                    data.map((item, index) => {
                        return (
                            <Questions key={index} question={item.question} answer={item.answer} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Section10;