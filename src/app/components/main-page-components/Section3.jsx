import CardSec3 from "../../components/main-page-components/small-components/CardSec3";
import { GrCertificate } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";


function Section3() {
    return (
        <div className="sm:px-24 h-screen w-full flex flex-col items-center justify-center max-sm:h-full">
            <h1 className="text-purple-500 font-semibold text-base">WHY CHOOSE MSX</h1>
            <h2 className="text-4xl font-semibold">Why MSX is Your Best Choice</h2>

            <div className="w-full flex gap-6 mt-14 max-sm:flex-wrap max-sm:gap-0">
                <CardSec3
                    icon={<GrCertificate />}
                    title={'Valuable Certificate'}
                    desc={'Strong affiliations with prestigious firms and recognition from esteemed institutes'}
                />

                <CardSec3
                    icon={<MdGroups />}
                    title={'Learning from Successful Professionals'}
                    desc={'Learn from industry professionals with real-world experience.'}
                />

                <CardSec3
                    icon={<FaShieldAlt />}
                    title={'Internships and Jobs'}
                    desc={'Guaranteed internships and potential job placements.'}
                />

                <CardSec3
                    icon={<FaGears />}
                    title={'Potential Job Offer'}
                    desc={'Facilitating employment opportunities within our firm'}
                />
            </div>
        </div>
    )
}

export default Section3;