import Image from "next/image";
import Link from "next/link";

function Section1() {
    return (
        <div className="bg-cover bg-center h-screen w-full pt-[100px] sm:px-24 max-sm:px-8 relative">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/msx-bg.jpeg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div className="w-1/2 text-white h-full flex flex-col justify-center max-sm:w-full">
                <h1 className="text-4xl font-bold max-sm:text-3xl">Empower Your Business & Skills with Expert IT Services and Courses</h1>

                <p className="text-2xl mt-4 font-semibold max-sm:text-xl">Start your journey to success today!</p>

                <div className="flex gap-4 flex-col mt-5">
                    <Link href={'/courses'}>
                        <button className="bg-gradient-to-r from-purple-500 to-purple-400 px-7 py-3 rounded hover:from-transparent hover:to-transparent hover:text-purple-500 hover:border hover:border-purple-500 border border-transparent">BROWSE COURSES</button>
                    </Link>

                    <Link href={'/services'}>
                        <button className="bg-gradient-to-r from-purple-500 to-purple-400 px-7 py-3 rounded hover:from-transparent hover:to-transparent hover:text-purple-500 hover:border hover:border-purple-500 border-transparent border">EXPLORE SERVICES</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section1;