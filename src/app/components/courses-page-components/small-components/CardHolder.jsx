"use client";
import { FaComputer } from "react-icons/fa6";
import Card from "./Card";
import { MdManageAccounts } from "react-icons/md";
import { BsPersonRaisedHand } from "react-icons/bs";
import Card2 from "./Card2";
import { useEffect, useState } from "react";

function CardHolder({ dataOf }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/courses-data.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return (
        <>
            <div className="flex flex-col gap-8 justify-between mt-8 max-sm:hidden">
                {
                    data.map((item, index) => {
                        if (dataOf != item.topicOf) return;
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                desc={item.smDesc}
                                icon={<MdManageAccounts />}
                                link="/"
                                img="/management-course.jpg"
                                additionalDesc={item.description}
                                cardPosRight={index % 2 === 0}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-col gap-8 items-center justify-between mt-8 sm:hidden">
                {
                    data.map((item, index) => {
                        if (dataOf != item.topicOf) return;
                        return (
                            <Card2
                                title={item.title}
                                desc={item.smDesc}
                                icon={<MdManageAccounts />}
                                link="/"
                                key={index}
                                img="/management-course.jpg"
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default CardHolder;