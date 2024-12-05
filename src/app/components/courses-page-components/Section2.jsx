import Card from "../courses-page-components/small-components/Card";
import { MdManageAccounts } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import Card2 from "../courses-page-components/small-components/Card2";
import SwitchBgImgsSection from "../services-page-components/small-components/SwitchBgImgsSection";



function Section2() {
    return (
        <div className="sm:px-24 sm:py-11 w-full">
            <div className="flex items-center flex-col w-full mb-12">
                <h1 className="text-purple-500 font-semibold text-base max-sm:mb-3">Courses we offer</h1>
                <h2 className="text-4xl font-semibold max-sm:text-center">Delivering IT solutions that enable you to work smarter.</h2>
            </div>

            {/* <div className="flex flex-col gap-8 justify-between mt-8">
                <Card
                    title="Management Courses"
                    desc="This is a description for the sample card."
                    icon={<MdManageAccounts />}
                    link="/"
                    img="/management-course.jpg"
                    additionalDesc="Our management courses are designed to provide you with a deep understanding of business operations, project management, and organizational leadership. Learn how to manage resources, optimize processes, and lead teams to success. These courses offer practical techniques and strategies to help you excel in managing people, projects, and entire organizations"
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
                />
            </div> */}

            {/*
            <div className="flex gap-8 justify-between mt-60">
                <Card2
                    title="Management Courses"
                    desc="This is a description for the sample card."
                    icon={<MdManageAccounts />}
                    link="/"
                    img="/management-course.jpg"
                />

                <Card2
                    title="IT Courses"
                    desc="This is a description for the sample card."
                    icon={<FaComputer />}
                    link="/"
                    img="/it-course.jpg"
                    cardPosRight
                />

                <Card2
                    title="Ladership Courses"
                    desc="This is a description for the sample card."
                    icon={<BsPersonRaisedHand />}
                    link="/"
                    img="/leadership-course.jpg"
                />

                <Card2
                    title="Management Courses"
                    desc="This is a description for the sample card."
                    icon={<MdManageAccounts />}
                    link="/"
                    img="/management-course.jpg"
                />
            </div> */}

            <SwitchBgImgsSection />
        </div>
    )
}

export default Section2;