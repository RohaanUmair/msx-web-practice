import Box from "./small-components/BoxSection4";
import Heading from "./small-components/Heading";

function Section4() {
    return (
        <div className="sm:px-24 bg-gray-100 py-10 sm:mt-14 h-[480px] max-sm:h-full max-sm:px-6">
            <Heading text={'Why Choose MSX Solutions'} />

            <p className="text-gray-500 my-6 max-sm:text-sm">This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence.</p>

            <div className="flex w-full justify-between sm:m-auto border-t border-gray-400 px-32 pb-10 max-sm:flex-wrap max-sm:px-0">
                <Box heading={'10+'} text={'Years of  Experience'} br />
                <Box heading={'170+'} text={'Happy Clients'} br />
                <Box heading={'200+'} text={'Employees'} br />
                <Box heading={'04'} text={'Offices Around the World'} />
            </div>

            <div className="bg-blue-950 h-32 w-full absolute left-0"></div>
        </div>
    )
}

export default Section4;