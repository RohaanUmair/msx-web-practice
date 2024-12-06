import { FaComputer } from "react-icons/fa6";
import Card from "./Card";
import { MdManageAccounts } from "react-icons/md";
import { BsPersonRaisedHand } from "react-icons/bs";
import Card2 from "./Card2";

function CardHolder() {
    return (
        <>
            <div className="flex flex-col gap-8 justify-between mt-8 max-sm:hidden">
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

            <div className="flex flex-col gap-8 items-center justify-between mt-8 sm:hidden">
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
                />

                <Card2
                    title="Ladership Courses"
                    desc="This is a description for the sample card."
                    icon={<BsPersonRaisedHand />}
                    link="/"
                    img="/leadership-course.jpg"
                />
            </div>
        </>
    )
}

export default CardHolder;