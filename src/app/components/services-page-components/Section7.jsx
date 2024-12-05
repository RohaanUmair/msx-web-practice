import Heading from "./small-components/Heading";
import BoxList from "./small-components/BoxList";

function Section7() {

    return (
        <div className="sm:px-24">
            <Heading text={"Our Proven Approach to Achieve Your Objectives"} />

            <p className="text-gray-500 my-6 text-lg tracking-tight max-sm:text-sm max-sm:my-3">Achieve your business goals with our successful MSX Methodology, renowned for its structured planning and consistent results.</p>

            <BoxList />
        </div>
    )
}

export default Section7;