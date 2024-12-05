import Image from "next/image";
import Heading from "./small-components/Heading";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import BlogsPreview from "./small-components/BlogsPreview";


function Section9() {
    return (
        <div className="sm:mt-14 sm:px-24 max-sm:py-6">
            <Heading text={'Blogs & Articles'} />

            <div className="flex mt-6 justify-center gap-5">
                <div className="border w-[674px] flex flex-col rounded-lg" style={{ boxShadow: '2px 2px 10px #999' }}>

                    <Image src={"/big-img.jpg"} alt="img" width={674} height={300} />


                    <div className="flex flex-col gap-4 py-7 px-10">

                        <div className="flex items-center gap-2">
                            <SlCalender className="font-semibold text-gray-500 text-md" />
                            <p className="font-semibold text-gray-500 text-sm">19 November, 2024</p>
                        </div>

                        <h1 className="text-2xl font-bold">Top 10 AI Consulting Firms to Work with in 2025</h1>

                        <p className="text-gray-500 text-sm">Picture this: You want to go on a trip but aren’t familiar with the best places to travel for an amazing experience. What would you…</p>

                        <button className="flex items-center text-purple-700">Read More <IoIosArrowRoundForward className="text-2xl" /></button>

                    </div>
                </div>


                <div className="flex flex-col justify-between max-sm:hidden">
                    <BlogsPreview title={'Top 10 AI Consulting Firms to Work...'} desc={'Picture this: You want to go on a trip but...'} imgSrc={'/big-img.jpg'} />
                    <BlogsPreview title={'Understanding Electronic Medical Records (Infographic)'} desc={'Gone are the days when doctors relied on paper charts...'} imgSrc={'/blogs-2.jpg'} />
                    <BlogsPreview title={'Different Types of Electronic Medical Record (EMR)...'} desc={'If you are surfing the internet to understand different types…'} imgSrc={'/blogs-3.jpg'} />
                </div>
            </div>
        </div>
    )
}

export default Section9;