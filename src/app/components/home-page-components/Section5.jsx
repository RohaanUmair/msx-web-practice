import Heading from "./small-components/Heading";
import SwitchBgImgsSection from "./small-components/SwitchBgImgsSection";

function Section5() {
    return (
        <div className="sm:px-24 sm:mt-14 py-16 max-sm:mt-10">

            <div className="w-2/3 flex flex-col gap-4 max-sm:w-full max-sm:my-5">
                <Heading text={"Industries We Transformed with Innovative Software Solutions"} />
                <p className="text-gray-500 max-sm:text-sm">We are committed to innovating across industries with our custom AI solutions, empowering businesses to thrive in the digital era.</p>
            </div>

            <SwitchBgImgsSection />

        </div>
    )
}

export default Section5;