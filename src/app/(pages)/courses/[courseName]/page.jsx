import { MdManageAccounts } from "react-icons/md";
import Card from "../../../components/courses-page-components/small-components/Card";
import { FaComputer } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";


function Course({ params }) {
    let courseName = '';

    if (params.courseName == 'leadership-courses') {
        courseName = 'Leadership';
    } else if (params.courseName == 'management-courses') {
        courseName = 'Management';
    } else if (params.courseName == 'it-courses') {
        courseName = 'IT';
    } else {
        throw new Error('No Page Found')
    }

    return (
        <>
            <div className="h-[100px] bg-black w-full">
            </div >


            <div className="sm:px-24 flex justify-center flex-col w-full py-8 max-w-screen-2xl max-sm:px-4">
                <p className="text-left mb-4 text-gray-700 flex items-center gap-1 ">
                    <Link href='/'>Home</Link>
                    <IoIosArrowForward />
                    <Link href='/courses'>Courses</Link>
                    <IoIosArrowForward />
                    <span className="text-black">{courseName}</span>
                </p>


                <h1 className="text-5xl font-semibold capitalize text-purple-500">{courseName} Courses</h1>
                <p className="text-xl mt-2">Here is a List of {courseName} Courses we are Currently Offering</p>


                <div className="flex flex-col gap-8 justify-between mt-8">
                    <Card
                        title="Management Courses"
                        desc="This is a description for the sample card."
                        icon={<MdManageAccounts />}
                        link="/"
                        img="/management-course.jpg"
                        additionalDesc="Our management courses are designed to provide you with a deep understanding of business operations, project management, and organizational leadership. Learn how to manage resources, optimize processes, and lead teams to success. These courses offer practical techniques and strategies to help you excel in managing people, projects, and entire organizations"
                        cardPosRight={false}
                    />

                    <Card
                        title="IT Courses"
                        desc="This is a description for the sample card."
                        icon={<FaComputer />}
                        link="/"
                        img="/it-course.jpg"
                        additionalDesc="Stay ahead in the tech world with our comprehensive IT courses, designed to equip you with essential skills in programming, web development, cybersecurity, data analysis, and more. Whether you're a beginner or looking to advance your career, our courses offer practical knowledge and hands-on experience to thrive in the ever-evolving field of technology."
                        cardPosRight
                    />

                    <Card
                        title="Ladership Courses"
                        desc="This is a description for the sample card."
                        icon={<BsPersonRaisedHand />}
                        link="/"
                        img="/leadership-course.jpg"
                        additionalDesc="Unlock your leadership potential with our dynamic leadership courses. Learn the key strategies for effective decision-making, team management, conflict resolution, and inspiring others. Whether you're aiming for a managerial position or seeking to enhance your leadership skills, these courses will help you lead with confidence and drive results."
                        cardPosRight={false}
                    />
                </div>

                <Link href='/courses' className="w-full flex justify-center mt-8">
                    <button className='border mt-2 border-purple-500 bg-gradient-to-r from-purple-500 to-purple-400 text-white px-16 m-auto py-3 rounded text-base hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500 flex items-center'>Show More Courses <IoIosArrowForward /></button>
                </Link>
            </div>
        </>
    )
}

export default Course;