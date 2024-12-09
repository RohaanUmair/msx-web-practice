import { MdManageAccounts } from "react-icons/md";
import Card from "../../../components/courses-page-components/small-components/Card";
import { FaComputer } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import CardHolder from "../../../components/courses-page-components/small-components/CardHolder";
import Link from "next/link";


function Course({ params }) {
    let courseName = '';

    if (params.courseName == 'engineering-courses') {
        courseName = 'Engineering';
    } else if (params.courseName == 'project-management-courses') {
        courseName = 'Project Management';
    } else if (params.courseName == 'health-safety-courses') {
        courseName = 'Health & Safety';
    } else if (params.courseName == 'leadership-courses') {
        courseName = 'Leadership';
    } else if (params.courseName == 'it-courses') {
        courseName = 'IT';
    } else if (params.courseName == 'ai-courses') {
        courseName = 'AI';
    } 

    return (
        <>
            <div className="h-[100px] max-sm:h-[80px] bg-black w-full">
            </div >


            <div className="sm:px-24 flex justify-center flex-col w-full py-8 max-w-screen-2xl max-sm:px-6">
                <p className="text-left mb-4 text-gray-700 flex items-center gap-1 max-sm:text-xs">
                    <Link href='/'>Home</Link>
                    <IoIosArrowForward />
                    <Link href='/courses'>Courses</Link>
                    <IoIosArrowForward />
                    <span className="text-black">{courseName}</span>
                </p>


                <h1 className="text-5xl max-sm:text-3xl font-semibold capitalize text-purple-500">{courseName} Courses</h1>
                <p className="text-xl max-sm:text-sm max-sm:w-[80%] mt-2">Here is a List of {courseName} Courses we are Currently Offering</p>


               <CardHolder dataOf={courseName} />

                <Link href='/courses' className="w-full flex justify-center mt-8">
                    <button className='border mt-2 max-sm:w-[90%] border-purple-500 bg-gradient-to-r from-purple-500 to-purple-400 text-white px-16 m-auto py-3 rounded text-base hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500 flex items-center justify-center'>Show More Courses <IoIosArrowForward className="max-sm:text-2xl" /></button>
                </Link>
            </div>
        </>
    )
}

export default Course;