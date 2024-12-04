"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";


function Questions({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`p-4 max-sm:scale-90 ${isExpanded? "bg-gradient-to-r from-purple-500 to-purple-400" : ""}`} style={{ boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.2)' }}>
            <div className={`text-xl font-bold cursor-pointer flex items-center justify-between  ${isExpanded? "bg-gradient-to-r from-purple-500 to-purple-400 text-white" : ""}`} onClick={() => setIsExpanded(!isExpanded)}>
                <h1 className={`text-lg font-semibold`}>{question}</h1>
                <FaPlus />
            </div>

            {isExpanded && (
                <p className="mt-2 text-gray-600 bg-white">{answer}</p>
            )}
        </div>
    );
}

export default Questions;
