import Heading from "./small-components/Heading";
import Image from "next/image";
import SwicthText from "./small-components/SwicthText";

function Section6() {
    return (
        <div className="sm:px-24 sm:pb-24 flex flex-col gap-6 max-sm:gap-1">
            <Heading text={'Our Client-Centric AI Solutions'} />

            <div className="flex h-full max-sm:flex-col">

                <div className="flex flex-col w-1/2 gap-6 items-start max-sm:w-full max-sm:px-6">
                    <SwicthText />
                    <button className="bg-gradient-to-r from-purple-500 to-purple-400 rounded px-4 py-2 text-white hover:from-white hover:to-white hover:text-purple-500 hover:border hover:border-purple-500">Read More</button>
                </div>


                <div className="w-1/2 max-sm:w-full flex items-center justify-center">
                    <Image src='/hims-img.webp' alt="hims-img" height={700} width={700} />
                </div>

            </div>
        </div>
    )
}

export default Section6;