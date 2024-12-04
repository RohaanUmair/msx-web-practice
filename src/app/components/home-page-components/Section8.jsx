import Heading from "./Heading";

function Section8() {
    return (
        <div className="sm:px-24 sm:mt-14 bg-gray-100 h-80 flex items-center justify-between max-sm:flex-col py-6">
            <div className="w-2/5 flex flex-col gap-4 max-sm:w-full px-5">
                <Heading text={'Industry Experts Commend our Work'} />
                <p className="text-gray-500 max-sm:text-sm">Several platforms and industry experts have acknowledged our seasoned engineers’ technical proficiency in various domains.</p>
            </div>

            <div className="text-3xl flex gap-10">
                <h1>COMPANY A</h1>
                <h1 className="max-sm:hidden">COMPANY B</h1>
                <h1 className="max-sm:hidden">COMPANY C</h1>
            </div>
        </div>
    )
}

export default Section8;