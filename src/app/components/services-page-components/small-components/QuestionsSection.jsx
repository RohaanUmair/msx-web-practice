"use client";
import { useEffect, useState } from "react";
import Questions from "./Questions";

function QuestionsSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/faqData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex flex-col gap-4 mt-8 max-sm:px-4 max-sm:gap-2">
            {
                data.map((item, index) => {
                    return (
                        <Questions key={index} question={item.question} answer={item.answer} />
                    )
                })
            }

        </div>
    )
}

export default QuestionsSection;